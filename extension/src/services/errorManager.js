'use strict'

const { UnknownError } = require('./errorList')
const { decorateError } = require('./logDecorator')

/**
 * @param {SW6Favorites.ShopwareError[]} messages
 * @param {SW6Favorites.PipelineContext} context
 * @throws Error
 */
const throwOnMessage = function (messages, context) {
  messages.forEach(message => {
    switch (message.code) {
      case 'FRAMEWORK__INVALID_UUID':
        context.log.fatal(decorateError(message), 'Unexpected UID provided')
        throw new UnknownError()
      case 'CHECKOUT__DUPLICATE_WISHLIST_PRODUCT':
        context.log.info(decorateError(message), 'Duplicate product found when merging')
        break
      default:
        context.log.error(decorateError(message), 'Could not map message')
        throw new UnknownError()
    }
  })
}

/**
 * @param {SW6Favorites.SWClientApiError|Error} error
 * @param {SW6Favorites.PipelineContext} context
 * @see https://shopware.stoplight.io/docs/store-api/ZG9jOjExMTYzMDU0-error-handling
 * @throws {Error}
 */
const throwOnApiError = function (error, context) {
  if (!error.statusCode) {
    context.log.error(decorateError(error), 'Not a Shopware API error thrown')
    throw new UnknownError()
  }
  switch (error.statusCode) {
    case 400:
      throwOnMessage(error.messages, context)
      break
    case 401:
      context.log.fatal(decorateError(error), 'Unauthorized request, is your SalesChannel access token missing?')
      throw UnknownError()
    case 403:
      context.log.fatal(decorateError(error), 'No authentication or wishlist is not activated in Shopware')
      throw new UnknownError()
    case 404:
      context.log.warn(decorateError(error), 'Product does not exists, de-sync between cached catalog & Shopware')
      break
    case 412:
      context.log.fatal(decorateError(error), 'Possibly SalesChannel access key is invalid.')
      throw new UnknownError()
    case 500:
    default:
      context.log.fatal(decorateError(error), 'Unmapped error')
      throw new UnknownError()
  }
}

module.exports = {
  throwOnApiError
}

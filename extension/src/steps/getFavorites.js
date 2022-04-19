'use strict'

const { getWishlistProducts, getSessionContext } = require('@shopware-pwa/shopware-6-client')
const { decorateError } = require('../services/logDecorator')
const { throwOnApiError } = require('../services/errorManager')

/**
 * @param {SW6Favorites.PipelineContext} context
 * @returns {Promise<{productIds: string[]}>}
 */
module.exports = async (context) => {
  const sessionContext = await getSessionContext().catch(e => throwOnApiError(e, context))

  if (sessionContext.customer === null) {
    return { productIds: [] }
  }

  const productIds = await getWishlistProducts()
    .then(({ products: { elements } }) => elements.map(({ id }) => id))
    .catch(e => {
      // Cannot throw in getFavIds pipe, theme cannot handle
      context.log.warn(decorateError(e))
      return []
    })

  return { productIds }
}

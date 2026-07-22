'use strict'

const {
  apiManager: { getWishlistProducts, getSessionContext },
  clientManger: { createApiConfig },
  errorManager: { throwOnApiError }
} = require('@shopgate/shopware6-utility')
const { decorateError } = require('../services/logDecorator')

/**
 * @param {ApiteSW6Utility.PipelineContext} context
 * @returns {Promise<{productIds: string[]}>}
 */
module.exports = async (context) => {
  const apiConfig = await createApiConfig(context)
  const sessionContext = await getSessionContext(apiConfig).catch(e => throwOnApiError(e, context))

  if (sessionContext.customer === null) {
    return { productIds: [] }
  }

  const productIds = await getWishlistProducts(apiConfig)
    .then(({ products: { elements } }) => elements.map(({ id }) => id))
    .catch(e => {
      // Cannot throw in getFavIds pipe, theme cannot handle
      context.log.warn(decorateError(e))
      return []
    })

  return { productIds }
}

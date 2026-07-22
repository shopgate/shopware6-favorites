'use strict'

const {
  apiManager: { removeWishlistProduct },
  clientManger: { createApiConfig },
  errorManager: { throwOnApiError }
} = require('@shopgate/shopware6-utility')

/**
 * @param {ApiteSW6Utility.PipelineContext} context
 * @param {Object} input
 * @param {[string]} input.productIds
 * @returns {Promise<void>}
 */
module.exports = async (context, input) => {
  const apiConfig = await createApiConfig(context)
  await Promise.all(
    input.productIds.map(
      prodId => removeWishlistProduct(apiConfig, prodId).catch(e => throwOnApiError(e, context))
    )
  )
}

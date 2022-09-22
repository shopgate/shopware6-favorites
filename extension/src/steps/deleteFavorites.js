'use strict'

const {
  apiManager: { createApiConfig },
  errorManager: { throwOnApiError }
} = require('@apite/shopware6-utility')
const { removeWishlistProduct } = require('@shopware-pwa/shopware-6-client')

/**
 * @param {ApiteSW6Helper.PipelineContext} context
 * @param {Object} input
 * @param {[string]} input.productIds
 * @returns {Promise<void>}
 */
module.exports = async (context, input) => {
  const apiConfig = await createApiConfig(context)
  await Promise.all(
    input.productIds.map(
      element => removeWishlistProduct(element, apiConfig).catch(e => throwOnApiError(e, context))
    )
  )
}

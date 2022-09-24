'use strict'

const {
  apiManager: { createApiConfig },
  errorManager: { throwOnApiError }
} = require('@apite/shopware6-utility')
const { addWishlistProduct, getSessionContext } = require('@shopware-pwa/shopware-6-client')

/**
 * @param {ApiteSW6Utility.PipelineContext} context
 * @param {Object} input
 * @param {[string]} input.productIds
 * @returns {Promise<{success: boolean}>}
 */
module.exports = async (context, input) => {
  const apiConfig = await createApiConfig(context)
  const sessionContext = await getSessionContext(apiConfig).catch(e => throwOnApiError(e, context))

  if (sessionContext.customer === null) {
    return { success: false }
  }

  await Promise.all(
    input.productIds.map(
      element => addWishlistProduct(element, apiConfig).catch(e => throwOnApiError(e, context))
    )
  )
  return { success: true }
}

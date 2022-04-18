'use strict'

const { addWishlistProduct, getSessionContext } = require('@shopware-pwa/shopware-6-client')
const { throwOnApiError } = require('../services/errorManager')

/**
 * @param {SW6Favorites.PipelineContext} context
 * @param {SW6Favorites.SGAddFavorites} input
 * @returns {Promise<{success: boolean}>}
 */
module.exports = async (context, input) => {
  const sessionContext = await getSessionContext().catch(e => throwOnApiError(e, context))

  if (sessionContext.customer === null) {
    return { success: false }
  }

  await Promise.all(
    input.productIds.map(
      element => addWishlistProduct(element).catch(e => throwOnApiError(e, context))
    )
  )
  return { success: true }
}

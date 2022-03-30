'use strict'

const { getWishlistProducts, getSessionContext, removeWishlistProduct} = require('@shopware-pwa/shopware-6-client')

/**
 * @param {SW6Cart.PipelineContext} context
 * @returns {Promise<{productIds: *}>}
 */
module.exports = async (context) => {
  const sessionContext = await getSessionContext()

  if (sessionContext.customer === null) {
    return { success: false }
  }

  const all = await getWishlistProducts()
  const favoriteIds = []
  await Promise.all(all.products.elements.map(async (element) => {
    favoriteIds.push(element.id)
  }))
  return { productIds: favoriteIds }
}

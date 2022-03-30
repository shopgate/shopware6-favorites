'use strict'

const { addWishlistProduct, getWishlistProducts, removeWishlistProduct} = require('@shopware-pwa/shopware-6-client')

/**
 * @param {SW6Favorites.PipelineContext} context
 * @param {SW6Favorites.SGPutFavorites} input
 * @returns {Promise<void>}
 */
module.exports = async (context, input) => {
  const all = await getWishlistProducts()
  const favoriteIds = []
  await Promise.all(all.products.elements.map(async (element) => {
    favoriteIds.push(element.id)
  }))
  await Promise.all(favoriteIds.map(async (element) => {
    await removeWishlistProduct(element)
      .catch(
        e => context.log.debug(e) // the product has already been removed
      )
  }))


  await Promise.all(input.productIds.map(async (element) => {
    await addWishlistProduct(element)
      .catch(
        e => context.log.debug(e) // the product has already been added
      )
  }))
}

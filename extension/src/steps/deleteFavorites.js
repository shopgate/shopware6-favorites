'use strict'

const { removeWishlistProduct } = require('@shopware-pwa/shopware-6-client')

/**
 * @param {SW6Cart.PipelineContext} context
 * @param {SGDeleteFavorites} input
 * @returns {Promise<void>}
 */
module.exports = async (context, input) => {
  await Promise.all(input.productIds.map(async (element) => {
    await removeWishlistProduct(element)
      .catch(
        e => context.log.debug(e) // the product has already been removed
      )
  }))
}

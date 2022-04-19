'use strict'

const { removeWishlistProduct } = require('@shopware-pwa/shopware-6-client')
const { throwOnApiError } = require('../services/errorManager')

/**
 * @param {SW6Favorites.PipelineContext} context
 * @param {SW6Favorites.SGDeleteFavorites} input
 * @returns {Promise<void>}
 */
module.exports = async (context, input) => {
  await Promise.all(
    input.productIds.map(
      element => removeWishlistProduct(element).catch(e => throwOnApiError(e, context))
    )
  )
}

'use strict'

const { addWishlistProduct, getSessionContext} = require('@shopware-pwa/shopware-6-client')

/**
 * @param {SW6Cart.PipelineContext} context
 * @param {SGAddFavorites} input
 * @returns {Promise<{success: *}>}
 */
module.exports = async (context, input) => {
  const sessionContext = await getSessionContext()

  if (sessionContext.customer === null) {
    return { success: false }
  }

  await Promise.all(input.productIds.map(async (element) => {
    await addWishlistProduct(element)
      .catch(
        e => context.log.debug(e) // the product has already been added
      )
  }))
  return { success: true }
}

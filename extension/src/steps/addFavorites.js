'use strict'

const { addWishlistProduct, getSessionContext } = require('@shopware-pwa/shopware-6-client')
const { decorateError } = require('../services/logDecorator')

/**
 * @param {SW6Cart.PipelineContext} context
 * @param {SGAddFavorites} input
 * @returns {Promise<{success: boolean}>}
 */
module.exports = async (context, input) => {
  // todo: handle error
  const sessionContext = await getSessionContext()

  if (sessionContext.customer === null) {
    return { success: false }
  }

  await Promise.all(input.productIds.map(async (element) => {
    await addWishlistProduct(element)
      .catch(
        // todo: handle other types of errors
        e => context.log.debug(decorateError(e)) // the product has already been added
      )
  }))
  return { success: true }
}

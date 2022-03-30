'use strict'

const { getWishlistProducts, getSessionContext } = require('@shopware-pwa/shopware-6-client')
const { decorateError } = require('../services/logDecorator')

/**
 * @param {SW6Favorites.PipelineContext} context
 * @returns {Promise<{productIds: string[]}>}
 */
module.exports = async (context) => {
  // todo: handle error
  const sessionContext = await getSessionContext()

  if (sessionContext.customer === null) {
    return { productIds: [] }
  }

  const productIds = await getWishlistProducts()
    .then(({ products: { elements } }) => elements.map(({ id }) => id))
    .catch(e => {
      // todo: handle error
      context.log.warn(decorateError(e))
      return []
    })

  return { productIds }
}

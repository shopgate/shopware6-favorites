'use strict'

const { contextManager: { saveContextToken } } = require('@apite/shopware6-utility')

/**
 * This pipeline should be called from the cart extension,
 * once the user logs in/logs out
 *
 * @param {ApiteSW6Utility.PipelineContext} context
 * @param {ApiteSW6Utility.ContextToken} input
 * @returns {Promise<void>}
 */
module.exports = async (context, { contextToken }) => saveContextToken(contextToken, context)

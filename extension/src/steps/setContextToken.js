'use strict'

const { contextManager: { saveContextToken } } = require('@apite/shopware6-utility')

/**
 * This pipeline should be called from the cart extension,
 * once the user logs in/logs out
 *
 * @param {ApiteSW6Helper.PipelineContext} context
 * @param {Object} input
 * @property {string} input.contextToken
 * @returns {Promise<void>}
 */
module.exports = async (context, { contextToken }) => saveContextToken(contextToken, context)

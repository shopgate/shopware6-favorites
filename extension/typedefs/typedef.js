///
/// Pipeline input
///

/**
 * @typedef {Object} SW6Favorites.SGAddFavorites
 * @property {[string]} productIds
 */
/**
 * @typedef {Object} SW6Favorites.SGDeleteFavorites
 * @property {[string]} productIds
 */
/**
 * @typedef {Object} SW6Favorites.SGPutFavorites
 * @property {[string]} productIds
 */

///
/// Pipeline output
///

/**
 * @typedef {Object} SW6Favorites.GeneralError
 * @property {string} entityId
 * @property {string} code - e.g. ENOTFOUND
 * @property {string} message
 * @property {Object|undefined} messageParams
 * @property {boolean|undefined} translated
 */

///
/// SW hacky pass-through
///
/** @typedef {EntityError} SW6Favorites.SWEntityError */
/** @typedef {ClientApiError} SW6Favorites.SWClientApiError */
/** @typedef {ShopwareError} SW6Favorites.ShopwareError */
/** @typedef {Cart} SW6Favorites.SWCart */

'use strict'

class GeneralError extends Error {
  constructor (message = 'message-default', code = 'EUNKNOWN', entityId = '') {
    super()
    this.message = 'Error'
    this.code = 'ECART'
    /**
     * @type {SW6Favorites.GeneralError[]}
     */
    this.errors = [{ entityId, code, message: `SW6Favorites.notice.${message}`, translated: false }]
  }
}

class UnknownError extends GeneralError {
  constructor () {
    super('message-default', 'EUNKNOWN', '')
  }
}

module.exports = {
  UnknownError
}

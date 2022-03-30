'use strict'

class GeneralError extends Error {
  constructor (message = 'message-default', code = 'EUNKNOWN', entityId = '') {
    super()
    this.message = 'Error'
    this.code = 'ECART'
    /**
     * @type {SW6Cart.SGCartError[]}
     */
    this.errors = [{ entityId, code, message: `SW6Cart.notice.${message}`, translated: false }]
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

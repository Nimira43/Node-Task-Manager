const { StatusCodes } = require('http-status-codes')
const CustomAPIError = require('./customer-api')

class BadRequestError extends CustomAPIError {
  constructor(message) {
    super(message)
    this.statusCode = StatusCodes.BAD_REQUEST
  }
}

module.exports = BadRequestError
const { HttpCode } = require('../helpers/constants')
const { ContactsService } = require('../services')

const contactsService = new ContactsService()

const addFeedback = async (req, res, next) => {
  try {
    const contact = await contactsService.addFeedback(req.body)
    res.status(HttpCode.CREATED).json({
      status: 'success',
      code: HttpCode.CREATED,
      data: {
        contact,
      }
    })
  } catch (e) {
    next(e)
  }
}

module.exports = {
  addFeedback,
}


const Feedback = require('../schemas/contacts')

class ContactsRepository {
  constructor() {
    this.model = Feedback
  }

  async addFeedback(body) {
    const newContact = await this.model.create({ ...body })

    return newContact
  }
}

module.exports = ContactsRepository

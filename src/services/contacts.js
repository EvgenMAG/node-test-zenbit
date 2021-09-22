
const { ContactsRepository } = require('../repository')

class ContactsService {
  constructor() {
    this.repository = {
      contacts: new ContactsRepository(),
    }
  }

  async addFeedback(body) {
    const data = await this.repository.contacts.addFeedback(body)
    return data
  }
}

module.exports = ContactsService

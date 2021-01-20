import axios from 'axios'
import { ApiContact } from '@/config/index'

class ContactService {
  async sendMail(data) {
    const { url } = ApiContact
    const dataToSend = { ...data, to: 'diogo@diogocezar.dev', subject: 'Diogo Cezar - Portfolio ~ Contact Email' }
    try {
      const result = await axios({
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'post',
        data: dataToSend,
      })
      return {
        success: true, result,
      }
    } catch (err) {
      return { success: false, error: err.toString() }
    }
  }
}

export default new ContactService()

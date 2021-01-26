import axios from 'axios'
import configs from '@/configs/index'

class ContactService {
  async sendMail(data) {
    const { url } = configs.ApiContact
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

import axios from 'axios'
import configs from '@/configs/index'

class BlogService {
  async getPosts(page = 1) {
    let { url } = configs.ApiPost
    url = `${url}/posts?page=${page}`
    try {
      const result = await axios({
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'get',
      })
      console.log(result)
      const { posts, total, totalPages } = result.data
      return {
        success: true, posts, total, totalPages,
      }
    } catch (err) {
      return { success: false, error: err.toString() }
    }
  }

  async getPost(slug) {
    console.log(slug)
    if (!slug) throw new Error('You need pass a slug.')
    let { url } = configs.ApiPost
    url = `${url}/posts?slug=${slug}`
    try {
      const result = await axios({
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'get',
      })
      const { posts, total, totalPages } = result.data
      return {
        success: true, posts: posts[0], total, totalPages,
      }
    } catch (err) {
      return { success: false, error: err.toString() }
    }
  }
}

export default new BlogService()

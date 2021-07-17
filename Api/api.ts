


import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/'
})

export const api = {
  getImages: async(id: number) => {
    const result = await instance.get(`images/search?limit=10&page=1&category_ids=${id}`)
    return result.data
  },
  getCategories: async() => {
    const result = await instance.get('categories')
    return result.data
  }
}


import axios from 'axios'

const KEY = 'AIzaSyD7taENqG6I6hh9k7HedFnvRQk7umLZvw4'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        safeSearch: 'none'
    }
})
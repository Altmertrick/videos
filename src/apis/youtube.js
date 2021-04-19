import axios from 'axios';

const KEY = 'AIzaSyBFR--kzywqwefqdMqLXBe2vLP_fQLUlr0'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})
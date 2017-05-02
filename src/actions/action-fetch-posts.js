import 'whatwg-fetch'
import {FETCH_POSTS} from './action-types'

const rootURL = 'http://reduxblog.herokuapp.com/api'
const KEY = 'rishabh3003'

export default function fetchPosts() {
    const request = fetch(`${rootURL}/posts?key=${KEY}`).then((data)=>{return data.json()})

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

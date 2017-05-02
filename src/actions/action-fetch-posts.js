// import 'whatwg-fetch'

const rootURL = 'http://reduxblog.herokuapp.com/'
const KEY = 'rishabh2233'

export default function fetchPosts() {
    return {
        type: 'FETCH_POSTS',
        payload: 'FETCHED'
    }
}

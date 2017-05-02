import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import _ from 'lodash'

import fetchPosts from '../actions/action-fetch-posts'

class Blog extends Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        console.log('POSTS', this.props.postsData)
        return(
            <main>
                <h3>BLOG POSTS</h3>
                <ul className="list-group">
                    {this._renderPosts()}
                </ul>
            </main>
        )
    }

    _renderPosts = () => {
        let posts = this.props.postsData
        return _.map(posts, (post) => {
            return (
                <li className="list-group-item">
                    <h6>{post.title}</h6>
                    <p>{post.content}</p>
                </li>
            )
        })
    }
}

function mapStateToProps(state) {
    return {postsData: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(Blog)

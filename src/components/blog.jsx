import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import fetchPosts from '../actions/action-fetch-posts'

class Blog extends Component {

    componentDidMount() {
        console.log(this.props)
    }

    render() {
        return(
            <main>
                BLOG
            </main>
        )
    }
}

export default connect(null, {fetchPosts})(Blog)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/PostActions'

class Post extends Component {
    onDeletePost = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.goBack.length > 0 ? this.props.history.goBack()
        : this.props.history.push( process.env.PUBLIC_URL )
    }

    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{ this.props.post.title }</h4>
                <p>{ this.props.post.body }</p>
                <div className="center">
                    <button className="btn grey" onClick={ this.onDeletePost }>
                        Delete post
                    </button>
                </div>
            </div>
        ) : (
            <div className="center">post loading...</div>
        )

        return (
            <div className="container">
                { post }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id
    return {
        post: state.posts.find(p => {
            // eslint-disable-next-line
            return id == p.id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
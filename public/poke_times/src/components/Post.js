import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deletePost, likePost } from '../actions/PostActions'
import { Link } from 'react-router-dom'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {

    onDeletePost = () => {
        this.props.deletePost(this.props.post.id)
        this.props.history.goBack.length > 0 ? this.props.history.goBack()
        : this.props.history.push( process.env.PUBLIC_URL )
    }

    onLikePost = (id) => {
        this.props.likePost(id)
    }

    render() {
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{ this.props.post.title }</h4>
                <p>{ this.props.post.body }</p>
                <div className="row action-container">
                    <Link to="#/" onClick={ () => this.onLikePost(this.props.post.id) }> <i className={ 'tiny material-icons ' + ( this.props.post.liked ? 'blue' :  'grey' ) + '-text col s2' }>thumb_up</i> </Link>                
                    <Link to="#/"> <i className="tiny material-icons grey-text col s2">share</i> </Link>
                    <Link to="#/" onClick={ this.onDeletePost }> <i className="tiny material-icons red-text col s2">delete</i> </Link>
                </div>
            </div>
        ) : (
            <div className="center">post loading...</div>
        )

        return (
            <div className="container">
                { post }
                <h6>Comments:</h6>
                <Comments id={ this.props.post.id } />
                <AddComment id={ this.props.post.id }/>
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
        },
        likePost: (id) => {
            dispatch(likePost(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Post)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { likePost } from '../actions/PostActions'

class Home extends Component {
    onLikePost = (id) => {
        this.props.likePost(id)
    }

    render() {
        console.log(this.props)
        const postList = this.props.posts.map(post => {
            let likeBtnClassName = `tiny material-icons ${ post.liked ? 'blue' :  'grey' }-text col s2`

            return (
                <div className="post card" key={ post.id }>
                    <div className="card-content">
                        <Link to={ process.env.PUBLIC_URL + '/post/' + post.id }>
                            <span className="card-title">{ post.title }</span>
                        </Link>
                        <p>{ post.body }</p>
                        <div className="row action-container">
                            <Link to="#/" onClick={ () => this.onLikePost(post.id) }> <i className={ likeBtnClassName }>thumb_up</i> </Link>
                            <Link to="#/"> <i className="tiny material-icons grey-text col s2">comment</i> </Link>
                            <Link to="#/"> <i className="tiny material-icons grey-text col s2">share</i> </Link>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            postList.length ? (
                <div className="container">
                    { postList}
                </div>
            ) : (
                    <div className="container">
                        <p>No posts</p>
                    </div>
                )
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        likePost: (id) => {
            dispatch(likePost(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
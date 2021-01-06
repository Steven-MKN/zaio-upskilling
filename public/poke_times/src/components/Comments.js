import React, { Component } from 'react'
import { connect } from 'react-redux'

class Comments extends Component {

    render() {
        let commentsList = this.props.comments.map( comment => {
            return (
                <div key= { comment.id }>
                    <p >{ comment.body }</p>                
                </div>
            )
        })

        return (
            commentsList.length ? (
                <div className="container comment-container">
                    { commentsList }
                </div>
            ) : (
                <div className="grey-text">be the first to comment</div>
            )
            
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.id
    return {
        // eslint-disable-next-line
        comments: [...state.posts.find(post => id == post.id).comments]
    }
}

export default connect(mapStateToProps)(Comments)
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        console.log(this.props)
        const postList = this.props.posts.map(post => {
            return (
                <div className="post card" key={ post.id }>
                    <div className="card-content">
                        <Link to={ process.env.PUBLIC_URL + '/post/' + post.id }>
                            <span className="card-title">{ post.title }</span>
                        </Link>
                        <p>{ post.body }</p>
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

export default connect(mapStateToProps)(Home)
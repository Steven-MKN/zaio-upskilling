import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { likePost, addPost } from '../actions/PostActions'

class Home extends Component {
    state = {
        addPostTitle: '',
        addPostBody: ''
    }

    onLikePost = (id) => {
        this.props.likePost(id)
    }

    addPostModal = null
    onModalToggle = () => {
        // eslint-disable-next-line
        if (this.addPostModal) this.addPostModal.style.display = this.addPostModal.style.display == 'block' ? 'none' : 'block'
    }

    onAddPost = (e) => {
        e.preventDefault()

        if (this.state.addPostTitle && this.state.addPostBody){
            this.props.addPost(this.state.addPostTitle, this.state.addPostBody)
            this.setState({
                addPostTitle: '',
                addPostBody: ''
            })
        }
    }

    onTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
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
                            <Link to={ process.env.PUBLIC_URL + '/post/' + post.id }> <i className="tiny material-icons grey-text col s2">comment</i> </Link>
                            <Link to="#/"> <i className="tiny material-icons grey-text col s2">share</i> </Link>
                        </div>
                    </div>                
                </div>
            )
        })

        return (
            <div>
                { postList.length ? (
                        <div className="container">
                            { postList}                        
                        </div>
                    ) : (
                        <div className="container">
                            <p>No posts</p>
                        </div>
                    )
                }
                <div id="addPostModal" className="modal" ref={ ref => this.addPostModal = ref }>
                    <div className="modal-content">
                        <h4>Add New Post</h4>
                        <form onSubmit={ this.onAddPost }>
                            <label htmlFor="addPostTitle">Title</label>
                            <input placeholder="give your post a title here" id="addPostTitle" type="text" className="validate" value={ this.state.addPostTitle } onChange={ this.onTextChange }/>                                
                            
                            <label htmlFor="addPostBody">Textarea</label>
                            <textarea id="addPostBody" className="materialize-textarea" placeholder="write your post here" value={ this.state.addPostBody } onChange={ this.onTextChange }></textarea>          
                        </form>
                    </div>
                    <div className="modal-footer">
                        <a href="#/" className="waves-effect waves-green btn-flat" onClick={ this.onModalToggle }>Close</a>
                        <a href="#/" className="waves-effect waves-green btn" onClick={ this.onAddPost }>Add</a>
                    </div>
                </div>

                <a href="#/" className="btn-floating btn-large red darken-3 add-post-btn" onClick={ this.onModalToggle }>
                    <i className="large material-icons">mode_edit</i>
                </a>
                
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: [...state.posts]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        likePost: (id) => {
            dispatch(likePost(id))
        },
        addPost: (title, body) => {
            dispatch(addPost(title, body))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
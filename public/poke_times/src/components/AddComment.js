import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/PostActions'

class AddComment extends Component {
    com = ''

    onAddComment = (e) => {
        e.preventDefault()
        console.log(this.props.id, this.com)
        if (this.com)
            this.props.addComment(this.props.id, this.com)
    }

    onTextChange = (e) => {
        this.com = e.target.value
    }

    render() {
        return (
            <div className="input-field">
                <input placeholder="write comment here" id="input_comment" type="text" onChange={ this.onTextChange }/>
                <button className="btn waves-effect waves-light center" onClick={ this.onAddComment }>Add</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        id: ownProps.id,
        comment: ''
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addComment: (id, comment) => {
            dispatch(addComment(id, comment))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddComment)
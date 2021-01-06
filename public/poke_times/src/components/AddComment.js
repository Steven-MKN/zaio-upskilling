import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions/PostActions'

class AddComment extends Component {
    state = {
        comment: ''
    }

    onAddComment = (e) => {
        e.preventDefault()
        console.log(this.props.id, this.state.comment)
        if (this.state.comment){
            this.props.addComment(this.props.id, this.state.comment)
            this.setState({
                comment: ''
            })
        }
    }

    onTextChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }

    render() {
        return (
            <div className="input-field">
                <input placeholder="write comment here" id="input_comment" type="text" value={ this.state.comment } onChange={ this.onTextChange } />
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
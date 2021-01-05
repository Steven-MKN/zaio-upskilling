export const deletePost = (id) => {
    return { type: 'DELETE_POST', id }
}

export const likePost = (id) => {
    return { type: 'LIKE_POST', id }
}

export const addComment = (id, comment) => {
    return { type: 'ADD_COMMENT', id, comment }
}
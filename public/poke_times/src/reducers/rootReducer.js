const initState = {
    posts: [
        {
            id: 0, 
            title: 'This is Title One', 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae obcaecati consequatur non odit accusamus, iusto autem ad, maiores, tempora sint exercitationem earum nihil temporibus unde necessitatibus! Provident, necessitatibus ut?', 
            liked: true,
            comments: [
                { id: 0, body: 'Awesome, I also wanna try Wobbuffet' }
            ]
        },
        {
            id: 1, 
            title: 'This is Title Two', 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae obcaecati consequatur non odit accusamus, iusto autem ad, maiores, tempora sint exercitationem earum nihil temporibus unde necessitatibus! Provident, necessitatibus ut?', 
            liked: false,
            comments: []
        },
        {
            id: 2, 
            title: 'This is Title Three', 
            body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae obcaecati consequatur non odit accusamus, iusto autem ad, maiores, tempora sint exercitationem earum nihil temporibus unde necessitatibus! Provident, necessitatibus ut?', 
            liked: false,
            comments: []
        }
    ]
}

const rootReducer = (state = initState, action) => {
    switch (action.type){
        case 'DELETE_POST':
            let newPosts = state.posts.filter(p => action.id !== p.id)
            return {
                ...state,
                posts: newPosts
            }
        
        case 'LIKE_POST':
            // eslint-disable-next-line
            let index = state.posts.findIndex(p => action.id == p.id)
            state.posts[index].liked = !state.posts[index].liked
            return state

        case 'ADD_COMMENT':
            // eslint-disable-next-line
            let i = state.posts.findIndex(p => action.id == p.id)
            let id = getId(state.posts[i].comments)
            let comment = { id, body: action.comment}
            
            let newState = { ...state }
            newState.posts[i].comments.push(comment)
            return newState
        
        default: return state
    }

}

let getId = (arr) => {
    if (arr && arr.length > 0)
      return Number.parseInt(arr[arr.length - 1].id) + 1
    else return 0
}

export default rootReducer
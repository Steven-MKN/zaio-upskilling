const initState = {
    posts: [
        {id: 0, title: 'This is Title One', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae obcaecati consequatur non odit accusamus, iusto autem ad, maiores, tempora sint exercitationem earum nihil temporibus unde necessitatibus! Provident, necessitatibus ut?'},
        {id: 1, title: 'This is Title Two', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae obcaecati consequatur non odit accusamus, iusto autem ad, maiores, tempora sint exercitationem earum nihil temporibus unde necessitatibus! Provident, necessitatibus ut?'},
        {id: 2, title: 'This is Title Three', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam recusandae obcaecati consequatur non odit accusamus, iusto autem ad, maiores, tempora sint exercitationem earum nihil temporibus unde necessitatibus! Provident, necessitatibus ut?'}
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
        
        default: return state
    }

}

export default rootReducer
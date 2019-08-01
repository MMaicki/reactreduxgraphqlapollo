import { INCREMENT_COUNT, DECREMENT_COUNT, GET_POSTS, UPDATE_POSTS, ADD_POST, CHANGE_POST } from '../config'

const counterReducer = (state = { count: 0, posts: [], newPost: '' }, action) => {
    switch(action.type){
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case UPDATE_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case ADD_POST:
            return {
                ...state,
                newPost: action.payload
            }
        case CHANGE_POST:
            return {
                ...state,
                posts: action.payload
            }
        default:
            return state
    }
}

export default counterReducer
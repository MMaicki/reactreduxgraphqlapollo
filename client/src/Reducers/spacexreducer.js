const spaceXReducer = (state = { launches: [] }, action) => {
    switch (action.type) {
        case 'GET_LAUNCHES':
            return {
                ...state,
                launches: action.payload
            }
        default:
            return state
    }
}

export default spaceXReducer
import { combineReducers } from 'redux'
import counterReducer from './countreducer'
import spacexreducer from './spacexreducer'

const rootReducer = combineReducers({
    counterReducer,
    spacexreducer
})

export default rootReducer
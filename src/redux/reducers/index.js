import { combineReducers} from 'redux';

// import redux do users
import users from './users';

// merge dos reducers e exportamos o rootReducers que vai ligar no store do Provider do react-redux
const rootReducer = combineReducers({
    users: users,    
})

export default rootReducer;
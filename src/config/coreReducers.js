import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';


function availableAppPaths(state = [], action) {
    return state;
}

function appsByPath(state = {}, action) {
    return state;
}

export default combineReducers({
    availableAppPaths,
    appsByPath,
    routing
});

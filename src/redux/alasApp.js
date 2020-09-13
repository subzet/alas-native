import { getUserMainScreen, getUserInvestmentScreen } from '../api/api'



//Action types.
export const REFRESH_MAINSCREEN = 'refresh_mainscreen'


//Action creators
export const refreshmain = (mainScreenData) => {
    return {
        type: REFRESH_MAINSCREEN,
        mainScreenData
    }
}


//Reducers
const initialState = {}


const appReducer = (state = initialState, action) =>  {
    switch(action.type) {
        case REFRESH_MAINSCREEN:
            return action.mainScreenData;
        default:
            return state
    }
}  

export default appReducer
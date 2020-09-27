import { getUserMainScreen, getUserInvestmentScreen } from '../api/api'



//Action types.
export const REFRESH_MAINSCREEN = 'refresh_mainscreen'
export const REFRESH_INVESTMENTS = 'refresh_investments'


//Action creators
export const refreshmain = (mainScreenData) => {
    return {
        type: REFRESH_MAINSCREEN,
        mainScreenData
    }
}

export const refreshinvestment = (investmentScreenData) => {
    return {
        type: REFRESH_INVESTMENTS,
        investmentScreenData
    }
}


//Reducers
const initialState = {}


const appReducer = (state = initialState, action) =>  {
    let currentState = {...state}
    switch(action.type) {
        case REFRESH_MAINSCREEN:
            currentState['mainScreen'] = action.mainScreenData
            return currentState
        case REFRESH_INVESTMENTS:
            currentState['investmentScreen'] = action.investmentScreenData
            return currentState
        default:
            return state;
    }
}  

export default appReducer
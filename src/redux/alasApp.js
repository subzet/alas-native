import { getUserMainScreen, getUserInvestmentScreen } from '../api/api'



//Action types.
export const REFRESH_MAINSCREEN = 'refresh_mainscreen'
export const REFRESH_INVESTMENTS = 'refresh_investments'
export const NEW_WITHDRAWAL = 'new_withdrawal'


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

export const newwithdrawal = (withdrawalData) => {
    return {
        type: NEW_WITHDRAWAL,
        withdrawalData
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
        case NEW_WITHDRAWAL:
            currentState['withdrawal'] = action.withdrawalData
            return currentState
        default:
            return state;
    }
}  

export default appReducer
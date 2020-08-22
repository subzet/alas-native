import { RETRIEVE_HOMESCREEN } from "../actions/homeScreen";
import { getUserMainScreen } from '../api/api'



export default (state={}, action) => {
    switch(action.type){
        case RETRIEVE_HOMESCREEN:
            getUserMainScreen(action.token).then(
                (response) => {
                    return response
                }
            )
    }
}
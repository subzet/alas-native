//

export const RETRIEVE_HOMESCREEN = 'RETRIEVE_HOMESCREEN'

export function retrieveHomescreen(token){
    return{
        type:'RETRIEVE_HOMESCREEN',
        token
    }
}
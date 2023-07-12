import * as Types from '../../config/actions';

const initState: AppConfig = {
   showSpinner : false
         
}


const appConfig = (state=initState, action:any) =>{
    switch(action.type) {
        
        case Types.UPDATE_SPINNER_STATUS:{
            return {
                ...state, 
                showSpinner: action.flag
            }
        }
               
        default :{
            return { ...state}
        }
    }

}

export default appConfig;
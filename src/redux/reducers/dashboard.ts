import * as Types from '../../config/actions';

const initState: dashboardState = {
    dogList: [],
    isBucketFull:false
         
}

const dashboard = (state=initState, action:any) =>{
    switch(action.type) {
        case Types.GET_DOGS :{
            return {...state, dogList:[...state.dogList, ...action.data], isBucketFull: action.flag}
        }
        case Types.UPDATE_DOGS:{
            return {
                ...state, dogList: action.data
            }
        }
               
        default :{
            return { ...state}
        }
    }

}

export default dashboard;
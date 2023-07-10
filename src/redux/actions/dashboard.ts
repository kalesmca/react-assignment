import dogsAPI from "../API/dogsAPI"
import * as actions from '../../config/actions';

export const getAllDogs = () => async(dispatch:any) =>{

    try{
        const dogsResp = await dogsAPI.getAllDogs();
        console.log(dogsResp)
        if(dogsResp?.data && dogsResp.data?.length){
            dispatch(updateDogsList(dogsResp.data))
        } 
        else {
            dispatch(updateDogsList([]))
        }
    }
    catch(err){
        console.error('getAll dog error:', err)
    }
}

const updateDogsList = (data:any) =>{
    return {
        type: actions.UPDATE_DOGS,
        data
    }
}
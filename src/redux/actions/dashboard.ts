import dogsAPI from "../API/dogsAPI"
import * as actions from '../../config/actions';
import * as CONSTANTS from '../../config/constants';

export const getAllDogs = (index:number) => async(dispatch:any) =>{

    try{
        const dogsResp = await dogsAPI.getAllDogs(10,index);
        console.log(dogsResp)
        if(dogsResp?.data && dogsResp.data?.length){
            dispatch(getDogs(dogsResp.data))
        } else {
            dispatch(getDogs(dogsResp.data, true))
        }
       
    }
    catch(err){
        console.error('getAll dog error:', err)
    }
}

export const getDogsByBreedName = (query:string, index:number=0) =>async (dispatch:any) => {
    try{
        const dogsResp = await dogsAPI.getDogByQuery(query, 10, index);
        console.log(dogsResp)
        if(dogsResp?.data && dogsResp.data?.length){
            const reslut = dogsResp.data.slice(0, index == 0? CONSTANTS.LIMIT : index*CONSTANTS.LIMIT)
            dispatch(updateDogsList(reslut))
        } 
        else {
            dispatch(updateDogsList([]))
        }
    }
    catch(err){
        console.error('getAll dog error:', err)
    }
}

const getDogs =(data:any, flag:boolean=false) =>{
    return {
        type: actions.GET_DOGS,
        data,
        flag
    }
}

const updateDogsList = (data:any) =>{
    return {
        type: actions.UPDATE_DOGS,
        data
    }
}
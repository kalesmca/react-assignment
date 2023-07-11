import dogsAPI from "../API/dogsAPI"
import * as actions from '../../config/actions';
import * as CONSTANTS from '../../config/constants';

export const getAllDogs = (currentState:any, isScrolling:false) => async(dispatch:any) =>{

    try{
        let stateIndex = currentState.paginationIndex;
        stateIndex = isScrolling ? stateIndex+1 : 0;
        const dogsResp = await dogsAPI.getAllDogs(10,stateIndex);
        console.log(dogsResp)
        if(dogsResp?.data && dogsResp.data?.length){
            dispatch(getDogs(dogsResp.data, false, stateIndex))
        } else {
            dispatch(getDogs(dogsResp.data, true, stateIndex))
        }
       
    }
    catch(err){
        console.error('getAll dog error:', err)
    }
}

export const getDogsByBreedName = (query:string, isScrolling:boolean = false, currentState:any) =>async (dispatch:any) => {
    try{
        let stateIndex = currentState.paginationIndex;
        stateIndex = isScrolling ? stateIndex+1 : 0;
        const dogsResp = await dogsAPI.getDogByQuery(query, 10, stateIndex);
        console.log(dogsResp)
        if(dogsResp?.data && dogsResp.data?.length){
            const result = dogsResp.data.slice(0,  (stateIndex+1)*CONSTANTS.LIMIT)
            let bucketFull = result?.length< dogsResp?.data?.length ? false : true;
            dispatch(updateDogsList(result, stateIndex, bucketFull))
        } 
        else {
            dispatch(updateDogsList([],0, true))
        }
    }
    catch(err){
        console.error('getAll dog error:', err)
    }
}

const getDogs =(data:any, flag:boolean=false, stateIndex:boolean) =>{
    return {
        type: actions.GET_DOGS,
        data,
        flag,
        stateIndex
    }
}

const updateDogsList = (data:any, stateIndex:number, isBucketFull:boolean) =>{
    return {
        type: actions.UPDATE_DOGS,
        data,
        stateIndex,
        isBucketFull
    }
}
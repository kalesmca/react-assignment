import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAllDogs } from "../../redux/actions/dashboard";

const Dashboard = () =>{
    const dashboard:dashboardState = useSelector((state:any)=>state.dashboard);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getAllDogs())

    },[])
    useEffect(()=>{
        console.log("state:", dashboard);

    },[dashboard])
    return(
        <div>Dashboard Component</div>
    )
}

export default Dashboard;
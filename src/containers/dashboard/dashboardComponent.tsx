import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAllDogs, getDogsByBreedName } from "../../redux/actions/dashboard";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useDebounce } from "../../customHooks/useDebounce";

const Dashboard = () =>{
    const dashboard:dashboardState = useSelector((state:any)=>state.dashboard);
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const searchQuery = useDebounce(query, 2000)

    useEffect(()=>{
        dispatch(getAllDogs())

    },[])
    useEffect(()=>{
        dispatch(getDogsByBreedName(searchQuery))
    },[searchQuery])
    useEffect(()=>{
        console.log("state:", dashboard);

    },[dashboard])
    return(
        <div>
            <Form>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail" style={{ marginTop: "-30px" }}>

                {/* <Form.Label></Form.Label> */}
                <Form.Control type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}} placeholder="Seach by Breed"
                />
                </Form.Group>
                </Row>
            </Form>
        </div>
    )
}

export default Dashboard;
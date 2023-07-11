import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getAllDogs, getDogsByBreedName } from "../../redux/actions/dashboard";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDebounce } from "../../customHooks/useDebounce";
import * as CONSTANTS from '../../config/constants';
import './dashboard.css'
const Dashboard = () =>{
    const dashboard:dashboardState = useSelector((state:any)=>state.dashboard);
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const searchQuery = useDebounce(query, 2000)
    let index = 0;
    let flag = false
   

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop+20 < document.documentElement.offsetHeight) {
            flag=true
          return;
        } 
        if(!dashboard.isBucketFull && flag){
            flag=false
            searchQuery ? dispatch(getAllDogs(index+1)) : dispatch(getAllDogs(index+1))
            // dispatch(getAllDogs(index+1))
            index=index+1;
            // setFlag(true)
        }
        

      };
      
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      });

    useEffect(()=>{
        dispatch(getAllDogs(index))

    },[])
    useEffect(()=>{
            dispatch(getDogsByBreedName(searchQuery, index))
        
    },[searchQuery])
    useEffect(()=>{
        console.log("state:", dashboard);

    },[dashboard])
    return(
        <div>
            <Form>
            <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">

                {/* <Form.Label></Form.Label> */}
                <Form.Control type="text" value={query} onChange={(e)=>{setQuery(e.target.value); index=0}} placeholder="Seach by Breed"
                />
                </Form.Group>
                </Row>
            </Form>
            <div>
                {
                    dashboard?.dogList?.length ? dashboard.dogList.map((dog:any, dIndex:number) =>{
                        return(
                            (<div className="card-container"><Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={ CONSTANTS.IMG_BASE_BATH+dog.reference_image_id+'.jpg'} />
                            <Card.Body>
                              <Card.Title>{dog.name}</Card.Title>
                              <Card.Text>
                              <div className="card-body-content">
                                    <span className="card-body-title">Origin</span>
                                    <span className="card-body-value">{dog.origin? dog.origin : "Universal"}</span>
                                </div>
                                <div className="card-body-content">
                                    <span className="card-body-title">life_span</span>
                                    <span className="card-body-value">{dog.life_span}</span>
                                </div>
                                <div className="card-body-content">
                                    <span className="card-body-title">Temperament</span>
                                    <span className="card-body-value">{dog.temperament}</span>
                                </div>

                               
                                
                              </Card.Text>
                                                            
                            </Card.Body>
                          </Card></div>) 
                        )
                    })
                    : (<div>No Data Found.</div>)
                }
            </div>
        </div>
    )
}

export default Dashboard;
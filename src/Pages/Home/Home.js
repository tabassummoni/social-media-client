import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Footers from '../Footer/Footers';
import One from './Section/One';
import Two from './Section/Two';

const Home = () => {
    return (
        <div>
            <div className='flex'>
                <div className='grid grid-cols-3'>
                    <One></One>
                </div>
                <div className='grid grid-cols-9'>
                    <Two></Two>
                </div>
            </div>
            <Footers></Footers>
        </div>

        //     <div className='d-full'>
        //     <Container className='flex' >
        //     <Row style={{marginTop : 10}}>
        //         <Col lg="3" >
        //         <One></One>
        //         </Col>
        //         <Col lg="9" >
        //         <Two></Two>
        //         </Col>
        //     </Row>
        // </Container>
        // </div>

    );
};

export default Home;



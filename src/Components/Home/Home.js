import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCart from '../HomeCart/HomeCart';
import Topic from '../Topic/Topic';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Home.css'
const Home = () => {
    const topics = useLoaderData();
    console.log(topics.data);
    return (
        <div>
            <HomeCart></HomeCart>
            <div className="cards">
                <Row xs={1} md={2} className="g-4">
                    {
                        topics.data.map(topic =>
                            <Col>
                                <Topic key={topic.id}></Topic>
                            </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;
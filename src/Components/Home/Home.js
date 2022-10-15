import React from 'react';
import { useLoaderData } from 'react-router-dom';
import HomeCart from '../HomeCart/HomeCart';
import Topic from '../Topic/Topic';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Home.css'
const Home = () => {
    const topics = useLoaderData();
    return (
        <div>
            <HomeCart></HomeCart>
            <div className="cards">
                <Row xs={1} sm={2} md={3} className="g-4">
                    {
                        topics.data.map(topic =>
                            <Col key={topic.id}>
                                <Topic topic={topic}></Topic>
                            </Col>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Home;
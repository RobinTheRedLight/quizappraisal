import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
import './Topic.css'

const Topic = ({ topic }) => {
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/quiz/${topic.id}`);
    }
    return (
        <Card className="img-wrap text-center">
            <Card.Img className='image' variant="top" src={topic.logo} />
            <Card.Body>
                <Card.Title>{topic.name}</Card.Title>
                <Button onClick={handleNavigate} variant="primary">Start Quiz</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Total Quiz : {topic.total}</Card.Footer>
        </Card>
    );
};

export default Topic;
import React from 'react';
import Card from 'react-bootstrap/Card';
import './HomeCart.css'
const HomeCart = () => {
    return (
        <Card className='homeCard' border="success">
            <Card.Header>About Quiz</Card.Header>
            <Card.Body>
                <blockquote className=" blockquote mb-0">
                    <p>
                        {' '}
                        The quizzes consists of questions carefully designed to help you self-assess your comprehension of the information presented on the topics covered in the module. No data will be collected on the website regarding your responses or how many times you take the quiz.{' '}
                    </p>
                </blockquote>
            </Card.Body>
        </Card>
    );
};

export default HomeCart;
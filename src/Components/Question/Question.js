import React, { useState } from 'react';
import './Question.css'
import { EyeIcon } from '@heroicons/react/24/solid';
import { Button, Form } from 'react-bootstrap';
const Question = ({ questioN }) => {
    console.log(questioN);
    const { question, correctAnswer, options } = questioN;
    const questionStr = question.replace(/<\/?[^>]+(>|$)/g, '');
    const [alertMaker, setAlertMaker] = useState(correctAnswer);
    const answerAlert = answer => {
        if (alertMaker === answer) {
            alert('Right Answer');
        }
        else {
            alert('Wrong Answer')
        }
    }
    return (
        <div className='question'>
            <div>
                <div className="upper-section">
                    <div className="question-container">
                        <h4>{questionStr}</h4>
                    </div>
                    <div className="iconContainer">
                        <EyeIcon className="icon" />
                    </div>
                </div>
                <div className="options">
                    <Form.Group >
                        {
                            options.map(option =>
                                <Form.Check
                                    key={option} onClick={() => answerAlert(option)} className='option' name='question' label={option} id={option} type='radio'>
                                </Form.Check>)
                        }
                    </Form.Group>
                </div>
            </div>
        </div >
    );
};

export default Question;

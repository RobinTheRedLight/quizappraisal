import React, { useState } from 'react';
import './Question.css'
import { EyeIcon } from '@heroicons/react/24/solid';
import { Form } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Question = ({ questioN }) => {
    const { question, correctAnswer, options } = questioN;
    const questionStr = question.replace(/<\/?[^>]+(>|$)/g, '');
    const [alertMaker, setAlertMaker] = useState(correctAnswer);
    const answerAlert = answer => {
        if (alertMaker === answer) {
            toast.success('🦄 Right Answer!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            toast.error('Wrong Answer!', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "colored",
            });
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
                        <EyeIcon  className="icon" />
                    </div>
                </div>
                <div className="options">
                    <Form.Group >
                        {
                            options.map(option =>
                                <div key={option}>
                                    <Form.Check
                                        onClick={() => answerAlert(option)} className='option' name='question' label={option} id={option} type='radio'>
                                    </Form.Check>
                                    <ToastContainer
                                        position="top-right"
                                        autoClose={1000}
                                        hideProgressBar={false}
                                        newestOnTop={false}
                                        closeOnClick
                                        rtl={false}
                                        pauseOnFocusLoss
                                        draggable={false}
                                        pauseOnHover={false}
                                        theme="colored"
                                    />
                                </div>
                            )
                        }
                    </Form.Group>

                </div>
            </div>
        </div >
    );
};

export default Question;

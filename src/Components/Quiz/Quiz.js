import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css';

const Quiz = () => {
    const quizData = useLoaderData();
    const { questions } = quizData.data;
    return (
        <div className='text-center'>
            <h1>Quiz</h1>
            <div>
                {
                    questions.map(questioN => <Question key={questioN.id} questioN={questioN} ></Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/24/solid';
import './Quiz.css';

const Quiz = () => {
    const quizData = useLoaderData();
    console.log(quizData.data);
    const {questions} = quizData.data;
    console.log(questions);
    return (
        <div className='text-center'>
            <h1>Quiz</h1>
            <div>
                <h4></h4>
                <EyeIcon className="icon" />
            </div>
        </div>
    );
};

export default Quiz;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuestions from '../AllQuestions/AllQuestions';

const QuizDetails = () => {
    const singleData=useLoaderData();
    const questions=singleData.data.questions;
    return (
        <div>
            {
                questions.map(question=><AllQuestions question={question}></AllQuestions>)
            }
        </div>
    );
};

export default QuizDetails;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllQuestions from '../AllQuestions/AllQuestions';

const QuizDetails = () => {
    const singleData=useLoaderData();
    const allquestions=singleData.data.questions;
    return (
        <div>
            {
                allquestions.map(questions=><AllQuestions key={questions.id} questions={questions}></AllQuestions>)
            }
        </div>
    );
};

export default QuizDetails;
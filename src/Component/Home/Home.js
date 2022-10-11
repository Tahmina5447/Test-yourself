import React, { useContext } from 'react';
import Allquizes from '../ALLquizes/Allquizes';
import { QuizContext } from '../../Root/Root';


const Home = () => {
const quizDatas=useContext(QuizContext);


    return (
        <div className='w-2/3 mx-auto'>
            <div className='text-center   my-12'>
                <h1 className='text-4xl font-bold text-green-900'>Develop Your Skill And Test YourSelf </h1>
                <p className=' mt-3 text-green-800'>We want to improve ourselves, Our learning content is challenging. If we want to be a success man we must do hard work. Be a light to yourself and do not depend on anyone for the understanding of life.</p>
            </div>
        
            <div  className='grid grid-cols-3 gap-6'>
                {
                    quizDatas.map(quiz=><Allquizes quiz={quiz}></Allquizes>)
                }
                
            </div>
        </div>
    );
};

export default Home;
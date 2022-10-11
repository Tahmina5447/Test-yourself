import React, { useContext } from 'react';
import Allquizes from '../ALLquizes/Allquizes';
import { QuizContext } from '../../Root/Root';



const Home = () => {
const quizDatas=useContext(QuizContext);


    return (
        <div className='w-2/3 mx-auto'>
            <div className='text-center my-12 bg-cover p-6'style={{ backgroundImage:`url("https://img.freepik.com/free-vector/geometric-frame-background-green-modern-design-vector_53876-157567.jpg?w=740&t=st=1665487985~exp=1665488585~hmac=1dcfa7c5025f7a64ebd657977571e6917db25bd020fff1f4f5931c9e2fcfb116")`,backgroundRepeat:"no-repeat" }}>
                <h1 className='text-4xl font-bold text-green-900'>Develop Your Skill And Test YourSelf </h1>
                <p className=' mt-3 text-green-800'>We want to improve ourselves, Our learning content is challenging. If we want to be a success man we must do hard work. Be a light to yourself and do not depend on anyone for the understanding of life.</p>
            </div>
        
            <div  className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 sm:gap-3'>
                {
                    quizDatas.map(quiz=><Allquizes quiz={quiz}></Allquizes>)
                }
                
            </div>
        </div>
    );
};

export default Home;
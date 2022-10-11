import React, { useState } from 'react';

import { UilEye } from '@iconscout/react-unicons'


const AllQuestions = ({questions}) => {
    const [ans,setAns]=useState('');
    const {question,options,correctAnswer}=questions;
    // console.log(questions);
    const correctAns=(cans)=>{
        setAns(cans)
    }



    return (
       <div className='lg:w-3/5 md:w-4/5 sm:w-2/5 mx-auto shadow-xl pb-6 my-10'>
        
            <div className='bg-green-900 text-white font-bold p-4 my-4 rounded-lg border-black border-2   text-xl '>
                <h1>{question}</h1>
            </div>
            <div className='grid grid-cols-2 gap-6 px-8 '>
                {
                    options.map(item=><div  className='flex bg-green-700 border pl-2  rounded-lg border-black'>
                    <div className='mr-2'>
                        <input  type="radio" name='radiobtn'  className="radio radio-xs mt-1 text-center bg-white" /> 
                    </div>
                    <div className=' text-white'><p> {item} </p></div>
                    
                    </div>)
                }
                
            </div>
            <div className='flex font-bold mt-4 w-3/5 mx-auto justify-center'>
                <div>
                    <h3 className='text-center text-green-900 '>See The Currect Ans:</h3>
                </div>
                <div onClick={()=>correctAns(correctAnswer)} className='ml-2 mt-1 cursor-pointer'>
                    <UilEye size="20" color="green" />
                </div>
                
            </div>
            <div className='text-center text-white bg-green-900 w-3/6 mx-auto mt-4 rounded-lg border-black border py-1'>
                <h3>{ans}</h3>
            </div>

       </div>
    );
};

export default AllQuestions;
import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Navbar from '../Component/Navbar/Navbar';


export const QuizContext=createContext([]);

const Root = () => {
 const allQuizes=useLoaderData();
    return (
        <QuizContext.Provider value={allQuizes}>
           
             <Navbar></Navbar>
            <Outlet></Outlet>
           
        </QuizContext.Provider>
        
    );
};

export default Root;
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-extrabold mt-10'>Page not founded!</h1>
            <Link  to='/' className='bg-green-900 text-center text-white font-bold py-2 px-3'>Go To Home Page</Link>
        </div>
    );
};

export default Error;
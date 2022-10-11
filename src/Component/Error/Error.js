import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-extrabold mt-10'>Page not founded!</h1>
            <Link  to='/' className='text-center text-green-900 underline block mt-6 decoration-solid font-bold'>Go To Home Page</Link>
        </div>
    );
};

export default Error;
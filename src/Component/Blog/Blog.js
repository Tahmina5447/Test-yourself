import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-2 w-3/5 mx-auto mt-10 gap-6'>
            <div className='border-2 rounded-lg border-green-900 p-6'>
                <h1 className='text-center text-green-900 text-xl font-bold mb-4'>What is the purpose of react router?</h1>
                <p className='text-center text-green-600'>Routing is a process in which a user is directed to different pages based on their action or request. ReactJS Router is mainly used for developing single page web applications. React router is used to define multiple routes in the application. </p>
            </div>
            <div className='border-2 rounded-lg border-green-900 p-6'>
                <h1 className='text-center text-green-900 text-xl font-bold mb-4'>How does context api works?</h1>
                <p className='text-center text-green-600'>Context API is a React API that can solve a lot of problems that modern applications face related to state management and how they are passing state to their components. Instead of installing a state management library in your project that will eventually cost your project performance and increase your bundle size, you can easily go with Context API and be fine with it. </p>
            </div>
            <div className='border-2 rounded-lg border-green-900 p-6'>
                <h1 className='text-center text-green-900 text-xl font-bold mb-4'>What is useref hook in react?</h1>
                <p className='text-center text-green-600'>The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.  </p>
            </div>
            
        </div>
    );
};

export default Blog;
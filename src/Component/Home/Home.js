import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    
    const quizData=useLoaderData();
    const {data}=quizData;

    return (
        <div className='w-2/3 mx-auto'>
            <div className='text-center   my-12'>
                <h1 className='text-4xl font-bold text-green-900'>Develop Your Skill And Test YourSelf </h1>
                <p className=' mt-3 text-green-800'>We want to improve ourselves, Our learning content is challenging. If we want to be a success man we must do hard work. Be a light to yourself and do not depend on anyone for the understanding of life.</p>
            </div>
            <div>
                <div className="card bg-green-900 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
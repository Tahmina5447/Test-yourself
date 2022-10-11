import React from 'react';

const Allquizes = ({quiz}) => {
    const {id,name,logo,total}=quiz;
    const startBtn=(id)=>{
        console.log('cl')
    }
    return (
   
        <div>
             <div className="card bg-green-900 shadow-xl">
                    <figure className="px-2 pt-2">
                        <img src={logo} alt="logo" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-white font-bold text-2xl">{name}</h2>
                        <p className='text-white'>Total Quiz: {total}</p>
                        <div className="card-actions">
                        <button onClick={()=>startBtn(id)} className="btn bg-white text-green-900 font-bold">Start Now</button>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Allquizes;
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-green-900 flex relative py-4">
            <div className="ml-8">
                <Link to='/' className="text-2xl font-bold text-white">Test YourSelf</Link>
            </div>
            
            <div className='absolute right-8 pt-1'>
                <ul className='flex font-bold text-white'>
                    <li className='mr-4'><Link to='/'>Home</Link></li>
                    <li className='mr-4'><Link to='blog'>Quiz</Link></li>
                    <li className='mr-4'><Link to='quiz'>Statistics</Link></li>
                    <li className='mr-4'><Link to='blog'>Blog</Link></li>
                </ul>
            </div>

            {/* <div className="absolute right-8 pt-1 lg:hidden md:hidden block">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded-box w-52">
                    <li><Link to='/'>Homepage</Link></li>
                    <li><Link to='blog'>Portfolio</Link></li>
                    <li><Link to='quiz'>About</Link></li>
                    </ul>
                </div>
            </div> */}
           
        {/* <div className='lg:hidden'>
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to='/'>Homepage</Link></li>
              <li><Link to='blog'>Portfolio</Link></li>
              <li><Link to='quiz'>About</Link></li>
            </ul>
          </div>
        </div>
        </div> */}
     </div>
    );
};

export default Navbar;
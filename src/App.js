import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root/Root';
import Home from './Component/Home/Home';
import Quiz from './Component/Quiz/Quiz';
import Statistics from './Component/Statistics/Statistics';
import Blog from './Component/Blog/Blog';
import { quizData } from './Loader/Loader';

function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      loader:quizData,
      element:<Root></Root>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'quiz',
          element:<Quiz></Quiz>
        },
        {
          path:'statistics',
          element:<Statistics></Statistics>
        },
        {
          path:'blog',
          element:<Blog></Blog>
        }
      ]
    }
  ]);
  return (
    <div>
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

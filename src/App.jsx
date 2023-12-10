import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from './pages/Root';
import Seasons from './pages/Season';
import Drivers from './pages/Drivers';
import Main from './pages/Main';
import Teams from './pages/Teams';

import './style.scss';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children:[
        {
          path: '/',
          element: <Main/>
        },
        {
          path:'Seasons',
          element:<Seasons/>
        },
        {
          path: 'Drivers',
          element: <Drivers/>
        },
        {
          path: 'Teams',
          element: <Teams/>
        },
        {
          path: '*',
          element: <h1>404</h1>
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
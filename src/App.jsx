import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Root from '../pages/Root';
import Seasons from '../pages/Seasons';
import Drivers from '../pages/Drivers';
import Main from '../pages/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root/>,
      children:[
        {
          path:'Seasons',
          element:<Seasons/>
        },
        {
          path: 'Drivers',
          element: <Drivers/>
        },
        {
          path: 'Main',
          element: <Main/>
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
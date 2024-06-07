
import './App.css';
import Headers from './Header'
import Aboutus from './Aboutus'
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import Body from './Body';
import Footer from './Footer'
import Error from './Error';
import Contact from './Contact'
import RestrauntMenu from './RestrauntMenu';
import Shimmer from './Shimmer';
const AppLayout = () =>{
  return(<>
  <Headers/>
  <Outlet/>
  <Footer/>

  </>);
}
function App() {


  const routers = createBrowserRouter([
    {
      path: "/",
      // element: <><Headers/><Body/><Footer/></>,
      element: <><AppLayout/></>,
      errorElement: <Error/>,
      children: [
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/about",
          element: <Aboutus/>
        },
        {
          path: "/shimmer",
          element: <Shimmer/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/restraunt/:id",
          element: <RestrauntMenu/>
        },
      ]
    },
    
  ])

  return (
    <RouterProvider router={routers}/>
  );
}

export default App;

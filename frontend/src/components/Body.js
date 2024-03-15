//in body we need to implement routing for which page we want to show like ogin page,signup page or main content
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";

const Body=()=>{
    const appRouter=createBrowserRouter([{
        path:"/",
        element:<Login/>
    },{
        path:"/browse",
        element:<Browse/>
    }])
    return(<>
    <RouterProvider router={appRouter}></RouterProvider>
    </>)
}
export default Body
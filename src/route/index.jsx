import Layout from "../component/layout";
import LandingPage from "../landingPage";
import Signup from "../auth/signup";

export const Routes = [
    {
        path :"",
        element : <Layout/>,
        children:[
            {
                path:"",
                element:<LandingPage/>
            }
        ],
    },
    {
        path :"/signUp",
        element: <Signup/>,
    }
]
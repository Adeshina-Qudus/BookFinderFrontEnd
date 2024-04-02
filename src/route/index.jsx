import Layout from "../component/layout";
import LandingPage from "../landingPage";
import Signup from "../auth/signup";
import SignIn from "../auth/signIn";
import SearchPage from "../searchpage";

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
    },
    {
        path: "/signIn",
        element: <SignIn/>
    },
    {
        path: "/searchPage",
        element: <SearchPage/>
    }
]
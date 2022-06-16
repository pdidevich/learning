import About from "../components/pages/About";
import Post from "../components/pages/Post";
import Error404 from "../components/pages/Error404";
import Posts from "../components/pages/Posts";
import Login from "../components/pages/Login";

export const privetRoutes = [
    {path: '/posts', element: <Posts/>, exact: true},
    {path: '/posts/:id', element: <Post/>, exact: true},
    {path: '*', element: <Error404/>, exact: false},
]

export const publicRoutes = [
    {path: '/login', element: <Login/>, exact: true},
    {path: '*', element: <Login/>, exact: false},
    {path: '/about', element: <About/>, exact: true},
]
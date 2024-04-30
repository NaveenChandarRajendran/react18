import { createBrowserRouter } from "react-router-dom";
import Counter from "./component/counter";
import Post from "./component/post";
import Contact from "./component/contact";
import UsersList from "./component/usersList";
import UserDetail from "./component/userDetail";
import Layout from "./component/layout";
import ErrorPage from "./component/errorPage";
import PrivateRoute from "./component/privateRoute";
import Login from "./component/login";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Counter /> }, //index true says that when route is at '/' Counter component has to render
            { path: '/login', element: <Login /> },
            { path: '/post', element: <Post /> },
            { path: '/contact', element: <Contact /> },
        ]
    },
    {
        element: <PrivateRoute />,
        children: [
            {
                path: '/users', element: <UsersList />, children: [
                    { path: ':id', element: <UserDetail /> }
                ]
            }
        ]
    }

])

export default routes;
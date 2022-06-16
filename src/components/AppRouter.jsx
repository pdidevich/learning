import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privetRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);

    // if (isLoading) {
    //     return <Loader/>
    // }

    return (
        <Routes>
            {isAuth
                ?
                privetRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                )
                :
                publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        exact={route.exact}
                        key={route.path}
                    />
                )
            }
        </Routes>
    );
};

// <Route exact path="/posts" element={<Posts/>}/>
// <Route exact path="/posts/:id" element={<Post/>}/>
// <Route path="*" element={<Error404/>}/>

export default AppRouter;
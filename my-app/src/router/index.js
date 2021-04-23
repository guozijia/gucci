import React, { memo, Suspense } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
// import { Skeleton } from 'antd';
// import Skeleton from 'react-loading-skeleton'
import { Spin } from 'antd';

const HYLogin = React.lazy(() => import('@/pages/login'))
const HYRegister = React.lazy(() => import('@/pages/register'))
//const HYResume = React.lazy(() => import('@/pages/resume'))
const Layout = React.lazy(() => import('@/components/app_layout'))
const Error404 = React.lazy(() => import('@/pages/404'))

export default memo(function Router (props) {
    return (
        <HashRouter>
            <Suspense fallback={<Spin tip="Loading..." style={{ position: "absolute", top: "50%", left: "50%" }} />}>
                <Switch>
                    <Redirect exact from="/" to="/resume" />
                    <Route exact path="/login" component={HYLogin}></Route>
                    <Route exact path="/register" component={HYRegister}></Route>
                    <Layout />
                    <Route exact path="/404" component={Error404}></Route>
                </Switch>
            </Suspense>
        </HashRouter>
    )
})

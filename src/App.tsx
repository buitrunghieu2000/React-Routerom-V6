
import './App.css'

import {BrowserRouter as Router, Routes, Route, useMatches, Navigate  } from 'react-router-dom'
import { PrivateRoute } from './utils/PrivateRoute'
import { privateRoutes, publicRoutes } from './routes'
import DefaultLayout from './components/Layout/DefaultLayout'
import { Fragment } from 'react';

interface IRoute {
  role: string;
}

function checkRole(roleAuth: any  , role: Array<IRoute>) {
  if(role.includes(roleAuth)) {
    return true
  } else return false
}

function App() {

  const userRole = 'Admin';
  console.log(1)

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<PrivateRoute/>}>
            {privateRoutes.map((privateRoute: any,index: number)=>{
              let Layout
              if(privateRoute.layout) {
                Layout = privateRoute.layout
              } else {
                Layout = DefaultLayout;
              }
              const PrivatePage = privateRoute.component
              return <Route key={index} path={privateRoute.path}  element={ checkRole(userRole,privateRoute.role ) ? <Layout><PrivatePage/></Layout> : <Navigate to ='/login'/> }/>
            })}
          </Route>
          {publicRoutes.map((publicRoute: any, index: number)=> {
            const Layout = publicRoute.layout || DefaultLayout
            const PublicPage = publicRoute.component
            return <Route key={index} path={publicRoute.path} element={<Layout><PublicPage/></Layout> }/>
          })} 
          <Route path='*' element={<>Not found Page</>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

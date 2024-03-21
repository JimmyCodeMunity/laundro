import { Navigate,Outlet } from 'react-router-dom'

const PrivateRoutes =()=> {
    // let auth = {'token':false}
    let auth = { token: localStorage.getItem('token') };
  return (
    auth.token ? <Outlet/> : <Navigate to="/"/>
  )
}

export default PrivateRoutes

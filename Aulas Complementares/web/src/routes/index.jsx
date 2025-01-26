import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";
import { api } from '../services/api';
import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';
import { CustomerRoutes } from './customer.routes';
import { SaleRoutes } from './sale.routes';
import { useEffect } from 'react';

export function Routes() {
  const { user, signOut } = useAuth();

  useEffect(() => {
    api
    .get('/users/validated').catch(error => {
      if(error.response.status === 401){
        
        signOut()
        }
    })
  }, [])

  

  function AccessRoute(){
    switch(user.role){
      case 'sale':
        return <SaleRoutes />
      case 'admin':
        return <AdminRoutes />
      default:
        return <CustomerRoutes />
        }
  }

  return (
    <BrowserRouter>
      {user ? <AccessRoute /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
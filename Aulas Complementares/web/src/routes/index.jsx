import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';
import { CustomerRoutes } from './customer.routes';
import { SaleRoutes } from './sale.routes';

export function Routes() {
  const { user } = useAuth();

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
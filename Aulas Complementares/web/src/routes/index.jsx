import { BrowserRouter } from 'react-router-dom';

import { useAuth } from "../hooks/auth";

import { AdminRoutes } from './admin.routes';
import { AuthRoutes } from './auth.routes';
import { CustomerRoutes } from './customer.routes';
import { SaleRoutes } from './sale.routes';

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {user ? <AdminRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
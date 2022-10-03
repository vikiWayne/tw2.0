import { RequireAuth } from "components";
import { APP_ROUTES } from "config/app";
import { Login, PaymentCenter, PurchaseCenter } from "pages";
import { Navigate, Route, Routes } from "react-router-dom";

function PageRoutes() {
  return (
    <Routes>
      <Route path={APP_ROUTES.LOGIN} element={<Login />} />
      <Route element={<RequireAuth />}>
        <Route path={APP_ROUTES.PURCHASE_CENTER} element={<PurchaseCenter />} />
        <Route path={APP_ROUTES.PAYMENT_CENTER} element={<PaymentCenter />} />
      </Route>
      <Route path="*" element={<Navigate to={APP_ROUTES.LOGIN} replace />} />
    </Routes>
  );
}

export default PageRoutes;

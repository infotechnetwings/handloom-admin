import { lazy } from "react";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Products = lazy(() => import("../pages/Products"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Category = lazy(() => import("../pages/Category"));
const Customers = lazy(() => import("../pages/Customers"));
const CustomerOrder = lazy(() => import("../pages/CustomerOrder"));
const Orders = lazy(() => import("../pages/Orders"));
const OrderInvoice = lazy(() => import("../pages/OrderInvoice"));
const Coupons = lazy(() => import("../pages/Coupons"));
const Page404 = lazy(() => import("../pages/404"));
const EditProfile = lazy(() => import("../pages/EditProfile"));
const Vendor = lazy(()=> import ("../pages/Vendor"))

const routes = [
  {
    path: "/dashboard",
    component: Dashboard,
  },
  {
    path: "/products",
    component: Products,
  },
  {
    path: "/product/:id",
    component: ProductDetails,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/customers",
    component: Customers,
  },
  {
    path: "/customer-order/:id",
    component: CustomerOrder,
  },
  {
    path: "/orders",
    component: Orders,
  },
  {
    path: "/order/:id",
    component: OrderInvoice,
  },
  {
    path: "/coupons",
    component: Coupons,
  },
  { path: "/setting", component: EditProfile },
  {
    path: "/404",
    component: Page404,
  },
  {
    path:"/vendors",
    component:Vendor
  },
  {
    path: "/edit-profile",
    component: EditProfile,
  },
];

export default routes;

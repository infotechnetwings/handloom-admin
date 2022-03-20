import {
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiCompass,
  FiGift,
  FiList,
  FiSettings,
  FiUserPlus
} from "react-icons/fi";

const sidebar = [
  {
    path: "/dashboard",
    icon: FiGrid,
    name: "Dashboard",
  },
  {
    path: "/vendors",
    icon: FiUserPlus,
    name: "Vendors",
  },
  {
    path: "/products",
    icon: FiShoppingBag,
    name: "Products",
  },
  {
    path: "/category",
    icon: FiList,
    name: "Category",
  },
  {
    path: "/customers",
    icon: FiUsers,
    name: "Customers",
  },
  {
    path: "/orders",
    icon: FiCompass,
    name: "Orders",
  },
  {
    path: "/coupons",
    icon: FiGift,
    name: "Coupons",
  },
  {
    path: "/setting",
    icon: FiSettings,
    name: "Setting",
  },
];

export default sidebar;

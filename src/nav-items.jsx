import { Home, Users, CreditCard } from "lucide-react";
import Dashboard from "./pages/Dashboard.jsx";
import Clients from "./pages/Clients.jsx";
import Payments from "./pages/Payments.jsx";

/**
 * Central place for defining the navigation items. Used for navigation components and routing.
 */
export const navItems = [
  {
    title: "Dashboard",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Dashboard />,
  },
  {
    title: "Clients",
    to: "/clients",
    icon: <Users className="h-4 w-4" />,
    page: <Clients />,
  },
  {
    title: "Payments",
    to: "/payments",
    icon: <CreditCard className="h-4 w-4" />,
    page: <Payments />,
  },
];

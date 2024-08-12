import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
              <Link to="/" className="text-xl font-bold">Gym Manager</Link>
              <ul className="flex space-x-4">
                {navItems.map(({ title, to, icon }) => (
                  <li key={to}>
                    <Link to={to} className="flex items-center">
                      {icon}
                      <span className="ml-2">{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <main className="flex-grow">
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

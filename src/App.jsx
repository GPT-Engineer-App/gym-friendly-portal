import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import ClientDashboard from "./pages/ClientDashboard";
import OwnerDashboard from "./pages/OwnerDashboard";
import { UserContext } from "./contexts/UserContext";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <QueryClientProvider client={queryClient}>
      <UserContext.Provider value={{ user, setUser }}>
        <TooltipProvider>
          <Toaster />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <main className="flex-grow">
                <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route
                    path="/client/*"
                    element={
                      user && user.role === "client" ? (
                        <ClientDashboard />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route
                    path="/owner/*"
                    element={
                      user && user.role === "owner" ? (
                        <OwnerDashboard />
                      ) : (
                        <Navigate to="/login" replace />
                      )
                    }
                  />
                  <Route path="*" element={<Navigate to="/login" replace />} />
                </Routes>
              </main>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </UserContext.Provider>
    </QueryClientProvider>
  );
};

export default App;

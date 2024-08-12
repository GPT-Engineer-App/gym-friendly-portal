import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ClientDashboard = () => {
  const { user } = useContext(UserContext);
  const [membership, setMembership] = useState(null);

  useEffect(() => {
    // Fetch membership details from your API
    // This is a mock implementation
    setMembership({
      type: 'Gold',
      expiryDate: '2023-12-31',
    });
  }, []);

  const daysUntilExpiry = () => {
    if (!membership) return 0;
    const today = new Date();
    const expiry = new Date(membership.expiryDate);
    const diffTime = Math.abs(expiry - today);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.email}</h1>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Your Membership</CardTitle>
        </CardHeader>
        <CardContent>
          {membership ? (
            <>
              <p>Type: {membership.type}</p>
              <p>Expires on: {membership.expiryDate}</p>
              <p>Days until expiry: {daysUntilExpiry()}</p>
            </>
          ) : (
            <p>Loading membership details...</p>
          )}
        </CardContent>
      </Card>
      <Button>Renew Membership</Button>
    </div>
  );
};

export default ClientDashboard;

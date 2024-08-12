import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus } from "lucide-react";
import AddClientModal from "../components/AddClientModal";

const OwnerDashboard = () => {
  const [clients, setClients] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", membership: "Gold", expiryDate: "2023-12-31" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", membership: "Silver", expiryDate: "2023-11-30" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", membership: "Bronze", expiryDate: "2023-10-31" },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddClient = (newClient) => {
    setClients([...clients, { id: clients.length + 1, ...newClient }]);
  };

  const handlePromptPayment = (clientId) => {
    // Implement Mpesa Daraja API call here
    console.log(`Prompting payment for client ${clientId}`);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Gym Owner Dashboard</h1>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Client
        </Button>
      </div>
      <Input
        className="mb-4"
        placeholder="Search clients..."
        // Implement search functionality here
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Membership</TableHead>
            <TableHead>Expiry Date</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.membership}</TableCell>
              <TableCell>{client.expiryDate}</TableCell>
              <TableCell>
                <Button onClick={() => handlePromptPayment(client.id)}>Prompt Payment</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddClientModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddClient={handleAddClient}
      />
    </div>
  );
};

export default OwnerDashboard;

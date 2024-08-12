import { useState } from "react";
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

const Clients = () => {
  const [clients, setClients] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", membership: "Gold" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", membership: "Silver" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", membership: "Bronze" },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddClient = (newClient) => {
    setClients([...clients, { id: clients.length + 1, ...newClient }]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Clients</h1>
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell>{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.membership}</TableCell>
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

export default Clients;

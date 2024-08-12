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
import AddPaymentModal from "../components/AddPaymentModal";

const Payments = () => {
  const [payments, setPayments] = useState([
    { id: 1, clientName: "John Doe", amount: 100, date: "2023-04-01", status: "Paid" },
    { id: 2, clientName: "Jane Smith", amount: 75, date: "2023-04-02", status: "Pending" },
    { id: 3, clientName: "Bob Johnson", amount: 50, date: "2023-04-03", status: "Paid" },
  ]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const handleAddPayment = (newPayment) => {
    setPayments([...payments, { id: payments.length + 1, ...newPayment }]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Payments</h1>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Add Payment
        </Button>
      </div>
      <Input
        className="mb-4"
        placeholder="Search payments..."
        // Implement search functionality here
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client Name</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {payments.map((payment) => (
            <TableRow key={payment.id}>
              <TableCell>{payment.clientName}</TableCell>
              <TableCell>${payment.amount}</TableCell>
              <TableCell>{payment.date}</TableCell>
              <TableCell>{payment.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AddPaymentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddPayment={handleAddPayment}
      />
    </div>
  );
};

export default Payments;

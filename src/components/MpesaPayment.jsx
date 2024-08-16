import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const MPESA_BASE_URL = 'https://sandbox.safaricom.co.ke';

const MpesaPayment = ({ clientId, amount }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePayment = async () => {
    setIsLoading(true);
    try {
      // Step 1: Register C2B URLs (this should be done once, not for every payment)
      await registerC2BUrls();

      // Step 2: Initiate payment
      const response = await axios.post('/api/initiate-payment', {
        phoneNumber,
        amount,
        clientId
      });

      if (response.data.ResponseCode === "0") {
        toast.success("Payment initiated successfully. Please check your phone.");
      } else {
        toast.error("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const registerC2BUrls = async () => {
    try {
      const response = await axios.post('/api/register-urls');
      console.log('C2B URLs registered:', response.data);
    } catch (error) {
      console.error('Error registering C2B URLs:', error);
    }
  };

  return (
    <div className="space-y-4">
      <Input
        type="tel"
        placeholder="Enter M-Pesa phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <Button onClick={handlePayment} disabled={isLoading}>
        {isLoading ? 'Processing...' : 'Pay with M-Pesa'}
      </Button>
    </div>
  );
};

export default MpesaPayment;
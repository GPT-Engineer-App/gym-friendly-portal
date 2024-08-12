import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserContext } from '../contexts/UserContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically validate the user against your backend
    // For this example, we'll use a simple check
    if (email === 'owner@gym.com' && password === 'password') {
      setUser({ id: 1, email, role: 'owner' });
      navigate('/owner');
    } else {
      // Assume any other login is a client
      setUser({ id: 2, email, role: 'client' });
      navigate('/client');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login to Gym Manager</h1>
        <form onSubmit={handleLogin}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4"
            required
          />
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;

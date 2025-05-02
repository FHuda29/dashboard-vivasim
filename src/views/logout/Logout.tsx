import { useEffect } from "react";
import { useNavigate } from 'react-router';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear authentication data
    localStorage.removeItem("data_success_login");
    // Optionally show a delay or message
    setTimeout(() => {
      navigate("/auth/login"); // redirect to login page
    }, 1000);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-lg font-semibold">Logging out...</p>
    </div>
  );
};

export default Logout;
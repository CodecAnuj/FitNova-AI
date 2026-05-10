import api from "../../api/axios";

import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const { user, setUser } =
    useAuth();

  const handleLogout = async () => {
    try {
      await api.post("/users/logout");

      setUser(null);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">
        Welcome {user?.name}
      </h1>

      <button
        onClick={handleLogout}
        className="px-6 py-3 rounded-xl bg-white text-black"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
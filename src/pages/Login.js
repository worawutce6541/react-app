import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import { useState } from "react";
import axios from "axios";

function Login() {
    const { login } = useAuth();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/login', {
        email: email,
        password: password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      login(res.data.token);
      alert('Login Successful!');
      navigate('/');
    } catch (err) {
      setError(err.response ? err.response.data.message : 'Login failed');
      console.error(err.response ? err.response.data : err); // Log the correct data
    }
  };
    return ( <>
     <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 bg-white mt-6 rounded-lg shadow-md">
            { error && <p className="text-red-500">{error}</p> }
          <form onSubmit={handleSubmit} className="p-3 w-96">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
             <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded mt-2"
                required
              />
            </div>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
              Login
            </button>
          </form>
          <p> <Link to={"/register"} className="mt-5 text-center block text-blue-800">สมัครสมาชิก</Link> </p>
        </div>
      </div>

    </>  );
}

export default Login;
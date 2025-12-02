import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Configure axios defaults
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  useEffect(() => {
    const fetchUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get('http://localhost:8000/api/user');
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user:", error);
        logout();
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [token]);

  const login = async (email, password) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', { email, password });
      const { token, user } = response.data; 
     
      const authToken = response.data.token || response.data.access_token; 
      
      if (authToken) {
          localStorage.setItem('token', authToken);
          setToken(authToken);
          axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
          
          // Fetch user details immediately if not provided in login response
          let userData = response.data.user;
          if (userData) {
              setUser(userData);
          } else {
              const userResp = await axios.get('http://localhost:8000/api/user');
              userData = userResp.data;
              setUser(userData);
          }
          
          if (userData.role === 'admin') {
            navigate('/admin/events');
          } else {
            navigate('/');
          }
          return { success: true };
      }
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }
  };

  const register = async (name, email, password, password_confirmation) => {
      try {
          const response = await axios.post('http://localhost:8000/api/register', {
              name,
              email,
              password,
              password_confirmation
          });
          
           const authToken = response.data.token || response.data.access_token;
           if (authToken) {
                localStorage.setItem('token', authToken);
                setToken(authToken);
                axios.defaults.headers.common['Authorization'] = `Bearer ${authToken}`;
                setUser(response.data.user); // Assuming register returns user too
                navigate('/'); // Redirect to home page for new users
                return { success: true };
           }
      } catch (error) {
          console.error("Registration error:", error);
           return { success: false, message: error.response?.data?.message || 'Registration failed' };
      }
  };

  const logout = async () => {
    try {
        await axios.post('http://localhost:8000/api/logout');
    } catch (e) {
        // Ignore error on logout
    }
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    delete axios.defaults.headers.common['Authorization'];
    navigate('/auth');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

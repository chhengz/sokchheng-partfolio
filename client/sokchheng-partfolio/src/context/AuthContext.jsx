import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 🔐 Load token from localStorage when app starts
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Option 1: Decode token (if it's JWT)
      const userData = parseJwt(token);
      setUser(userData);

      // Option 2: Or fetch user profile from API using the token
      // axios.get('/me', { headers: { Authorization: `Bearer ${token}` }})
      //   .then(res => setUser(res.data))
      //   .catch(() => logout()); // Invalid token
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    // Optional: Save token here if login() is used manually
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Simple JWT decoder (not secure, just to extract data)
function parseJwt(token) {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const decoded = JSON.parse(atob(base64));
    return decoded;
  } catch (err) {
    console.error("Failed to decode token:", err);
    return null;
  }
}

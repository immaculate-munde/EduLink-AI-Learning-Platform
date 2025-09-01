import React, { useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
type UserRole = 'student' | 'teacher';
interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, role: UserRole) => Promise<void>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export function AuthProvider({
  children
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  // Mock authentication functions
  const login = async (email: string, password: string) => {
    // In a real app, this would make an API call
    // For prototype, we'll simulate a successful login
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      role: email.includes('teacher') ? 'teacher' : 'student'
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    // Redirect based on role
    if (mockUser.role === 'teacher') {
      navigate('/app/teacher');
    } else {
      navigate('/app/student');
    }
  };
  const signup = async (name: string, email: string, password: string, role: UserRole) => {
    // In a real app, this would make an API call
    // For prototype, we'll simulate a successful signup
    const mockUser: User = {
      id: '1',
      name,
      email,
      role
    };
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    // Redirect based on role
    if (role === 'teacher') {
      navigate('/app/teacher');
    } else {
      navigate('/app/student');
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    navigate('/');
  };
  return <AuthContext.Provider value={{
    user,
    isAuthenticated: !!user,
    login,
    signup,
    logout
  }}>
      {children}
    </AuthContext.Provider>;
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
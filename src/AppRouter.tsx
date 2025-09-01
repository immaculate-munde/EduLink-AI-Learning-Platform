import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { StudentDashboard } from './pages/StudentDashboard';
import { TeacherDashboard } from './pages/TeacherDashboard';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Quiz } from './pages/Quiz';
import { ResourceLibrary } from './pages/ResourceLibrary';
import { Forum } from './pages/Forum';
import { ForumPost } from './pages/ForumPost';
import { Layout } from './components/layout/Layout';
import { AuthProvider, useAuth } from './context/AuthContext';
const ProtectedRoute = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const {
    isAuthenticated
  } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};
export function AppRouter() {
  return <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/app" element={<ProtectedRoute>
                <Layout />
              </ProtectedRoute>}>
            <Route path="student" element={<StudentDashboard />} />
            <Route path="teacher" element={<TeacherDashboard />} />
            <Route path="quiz" element={<Quiz />} />
            <Route path="resources" element={<ResourceLibrary />} />
            <Route path="forum" element={<Forum />} />
            <Route path="forum/:postId" element={<ForumPost />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>;
}
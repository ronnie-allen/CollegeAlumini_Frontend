import { Routes, Route, Navigate } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { LoginForm } from './components/auth/LoginForm';
// import { RegisterPage } from './components/auth/AluminiProfile';
// import { DashboardPage } from './pages/DashboardPage';
// import { AlumniListPage } from './pages/alumni/AlumniListPage';
// import { AlumniProfilePage } from './pages/alumni/AlumniProfilePage';
// import { ProfilePage } from './pages/ProfilePage';
// import { ConnectionsPage } from './pages/ConnectionsPage';
// import { SettingsPage } from './pages/SettingsPage';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated } = useAuth() as { isAuthenticated: boolean };

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={
        !isAuthenticated ? <LoginForm /> : <Navigate to="/dashboard" replace />
      } />
      {/* <Route path="/register" element={
        !isAuthenticated ? <RegisterPage /> : <Navigate to="/dashboard" replace />
      } /> */}
      
      {/* Protected routes */}
      <Route element={<AppLayout />}>
        {/* <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/alumni" element={<AlumniListPage />} />
        <Route path="/alumni/:id" element={<AlumniProfilePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/connections" element={<ConnectionsPage />} />
        <Route path="/settings" element={<SettingsPage />} /> */}
      </Route>
      
      {/* Redirect to login or dashboard based on auth status */}
      <Route path="/" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />
      } />
      
      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/layout/Layout";
import Login from "../pages/auth/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import UserList from "../pages/users/UserList";
import AddUser from "../pages/users/AddUser";
import EditUser from "../pages/users/EditUser";
import ViewUser from "../pages/users/ViewUser";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/new" element={<AddUser />} />
          <Route path="/users/:id" element={<ViewUser />} />
          <Route path="/users/:id/edit" element={<EditUser />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}

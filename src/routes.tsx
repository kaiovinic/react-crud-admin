import { Route, Routes } from "react-router-dom";

import UserCreate from "./pages/Users/Create";
import UserList from "./pages/Users/List";
import UserEdit from "./pages/Users/Edit";
import Dashboard from "./pages/Dashboard";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/users">
        <Route path="/users" element={<UserList />} />
        <Route path="/users/new" element={<UserCreate />} />
        <Route path="/users/:id" element={<UserEdit />} />
      </Route>
    </Routes>
  );
};

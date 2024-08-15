import { Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/users">
        <Route path="/users" element={<>Users</>} />
        <Route path="/users/new" element={<>New Users</>} />
        <Route path="/users/:id" element={<>Edit Users</>} />
      </Route>
    </Routes>
  );
};

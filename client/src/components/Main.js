import { Route, Routes, Navigate } from 'react-router-dom';
import { UserFormPage, UsersPage } from './mainComponents';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/users" exact element={<UsersPage />} />
        <Route path="/users/create" exact element={<UserFormPage />} />
        <Route path="/users/:id/edit" element={<UserFormPage />} />
        <Route path="*" element={<Navigate to="/users" />} />
      </Routes>
    </main>
  );
}

export default Main;

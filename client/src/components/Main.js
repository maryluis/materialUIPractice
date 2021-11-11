import { Route, Routes } from 'react-router-dom';
import { FormPage, UsersPage } from './mainComponents';

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" exact element={<UsersPage />} />
        <Route path="/create" exact element={<FormPage />} />
        <Route path="/edit" exact element={<FormPage />} />
      </Routes>
    </main>
  );
}

export default Main;

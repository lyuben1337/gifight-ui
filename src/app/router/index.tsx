import { BrowserRouter, Route, Routes } from "react-router";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<div>Home Page</div>} />
        <Route path="sign-in" element={<div>Sign In</div>} />
        <Route path="sign-up" element={<div>Sing Up</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;

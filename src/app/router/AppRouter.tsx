import { BrowserRouter, Route, Routes } from "react-router";
import { AppLayout, AuthLayout } from "../layout";
import { SignInPage, SignUpPage } from "../../pages/auth";
import { UserPage } from "../../pages/users";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>

        <Route element={<AppLayout />}>
          <Route path="users/:id" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

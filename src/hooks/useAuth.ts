import { useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { RootState } from "../shared/redux/store.ts";
import { useNavigate } from "react-router";

export function useAuth() {
  const { token, isLoading, error } = useSelector(
    (state: RootState) => state.auth,
  );
  const navigate = useNavigate();

  let userId: number | null = null;
  let isAuthenticated = false;

  if (token) {
    try {
      const decodedToken: { sub: string } = jwtDecode(token);
      userId = Number.parseInt(decodedToken.sub);
      isAuthenticated = true;
    } catch {
      toast.error("Invalid authentication token!");
      navigate("/sign-in");
    }
  }

  return {
    isAuthenticated,
    token,
    userId,
    isLoading,
    error,
  };
}

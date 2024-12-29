import {
  Button,
  Container,
  Input,
  Link,
  Text,
  Title,
} from "../../shared/components";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { AppDispatch, RootState } from "../../shared/redux/store.ts";
import { signIn } from "../../shared/redux/authSlice.ts";
import { toast } from "react-toastify";

export function SignInPage() {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading } = useSelector((state: RootState) => state.auth);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const action = await dispatch(signIn({ username, password }));
    if (signIn.fulfilled.match(action)) {
      toast.info("Successfully authenticated!");
      navigate(`/`);
    }
  };

  return (
    <Container className="max-w-xl w-full min-w-40 p-8">
      <form onSubmit={handleSignIn} className="w-full">
        <Title className="text-center">Gifight Authorization</Title>
        <Input
          required
          className="mt-8"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          required
          className="mt-4"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button disabled={isLoading} className="mt-8">
          Sign In
        </Button>
        <Text className="text-end mt-2">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </Text>
      </form>
    </Container>
  );
}

import {
  Button,
  Container,
  Input,
  Link,
  Text,
  Title,
} from "../../shared/components";

export function SignInPage() {
  return (
    <Container className="max-w-xl w-full min-w-40 p-8">
      <form className="w-full">
        <Title className="text-center">Gifight Authorization</Title>
        <Input required className="mt-8" placeholder="Username" />
        <Input
          required
          className="mt-4"
          placeholder="Password"
          type="password"
        />
        <Button className="mt-8">Sign In</Button>
        <Text className="text-end mt-2">
          Don't have an account? <Link to="/sign-up">Sign Up</Link>
        </Text>
      </form>
    </Container>
  );
}

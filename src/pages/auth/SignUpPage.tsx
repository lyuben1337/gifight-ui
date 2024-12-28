import {
  Button,
  Container,
  Input,
  Link,
  Text,
  Title,
} from "../../shared/components";

export function SignUpPage() {
  return (
    <Container className="max-w-xl w-full min-w-40 p-8">
      <form className="w-full">
        <Title className="text-center">Gifight New Account</Title>
        <Input required className="mt-8" placeholder="Username" />
        <Input
          required
          className="mt-4"
          placeholder="Password"
          type="password"
        />
        <Input
          required
          className="mt-4"
          placeholder="Confirm Password"
          type="password"
        />
        <Button className="mt-8">Sign Up</Button>
        <Text className="text-end mt-2">
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </Text>
      </form>
    </Container>
  );
}

import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../shared/models";
import { getUser } from "../../shared/api/users";
import { Container, Text, Title } from "../../shared/components";
import { Card } from "../../widgets/cards/Card";
import { signOut } from "../../shared/redux/authSlice.ts";
import { toast } from "react-toastify";

export function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async (userId: string) => {
      const response = await getUser(userId);
      setUser(response);
    };
    if (id) fetchUser(id);
  }, [id]);

  if (!user) {
    return <Text>Loading...</Text>;
  }

  const handleSignOut = () => {
    dispatch(signOut());
    toast.info("Signed Out!");
    navigate("/sign-in");
  };

  return (
    <Container className="max-w-6xl shadow-md w-full p-8">
      <div className="w-full justify-between flex">
        <div>
          <Title>{user.username}</Title>
          <Text className="mt-2">Role: {user.role}</Text>
        </div>
        <button onClick={handleSignOut}>
          <Text className="transition-colors cursor-pointer hover:text-blue-500">
            Sign Out
          </Text>
        </button>
      </div>

      <div className="mt-6">
        <Title className="mb-4">Your Cards</Title>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {user.cards.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </Container>
  );
}

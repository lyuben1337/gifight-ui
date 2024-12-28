import { useParams } from "react-router";
import { Text } from "../../shared/components";

export function UserPage() {
  const { id } = useParams();

  return <Text>{id}</Text>;
}

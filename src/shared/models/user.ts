import { Card } from "./card.ts";

export type User = {
  id: number;
  username: string;
  role: "Admin" | "Player";
  cards: Array<Card>;
};

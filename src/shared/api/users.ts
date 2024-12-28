import apiClient from "./apiClient.ts";
import { User } from "../models";
import { UserPageDto } from "../dtos/users";

export async function getUser(id: number): Promise<User> {
  const response = await apiClient.get(`/users/${id}`);
  return response.data;
}

export async function getUsers(): Promise<UserPageDto> {
  const response = await apiClient.get("/Users");
  return response.data;
}

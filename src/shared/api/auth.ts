import apiClient from "./apiClient.ts";
import {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from "../dtos/auth";

export async function postSignIn(
  request: SignInRequest,
): Promise<SignInResponse> {
  const response = await apiClient.post("/SignIn", request);
  return response.data;
}

export async function postSignUp(
  request: SignUpRequest,
): Promise<SignUpResponse> {
  const response = await apiClient.post("/SignUp", request);
  return response.data;
}

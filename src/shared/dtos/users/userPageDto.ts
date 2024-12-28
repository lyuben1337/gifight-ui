import { UserDto } from "./userDto.ts";

export type UserPageDto = {
  items: Array<UserDto>;
  totalCount: number;
  currentPage: number;
  pageSize: number;
};

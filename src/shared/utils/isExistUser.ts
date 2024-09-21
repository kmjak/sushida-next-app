import { UserType } from "../types/usertype";

export const isExistUser = ({ users, name, pass }: { users: UserType[], name: string, pass: string }): UserType => {
  const user = users.find((user: { name: string; pass: string; }) => user.name === name && user.pass === pass);
  return user!;
}
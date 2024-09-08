import { v4 as uuidv4 } from 'uuid';
import { UserType } from "../types/usertype";

export const getAllUsers = async ():Promise<UserType[]> => {
  const res = await fetch("http://localhost:3001/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const datas = await res.json();
  return datas;
}

export const createUser = async (name: string, pass: string):Promise<void> => {
  await fetch("http://localhost:3001/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ uuid: uuidv4(), name, pass }),
  });
}
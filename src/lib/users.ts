import { v4 as uuidv4 } from 'uuid';
import { UserType } from "../shared/types/Usertype";
import { CreateUserProps } from '@/shared/types/CreateUser';

const USERS_JSON_URL = process.env.NEXT_PUBLIC_USERS_JSON_SERVER!;

export const userServices = () => {
  const getAllUsers = async () : Promise<UserType[]> => {
    const res = await fetch(USERS_JSON_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datas = await res.json();
    return datas;
  }

  const createUser = async ({name, pass}:CreateUserProps):Promise<boolean> => {
    await fetch(USERS_JSON_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid: uuidv4(), name, pass }),
    });
    return true;
  }

  return {
    getAllUsers,
    createUser
  }
}
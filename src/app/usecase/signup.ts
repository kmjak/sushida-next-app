import { CreateUserProps } from "@/shared/types/CreateUser";
import { UserType } from "@/shared/types/usertype";
import { isExistUser } from "@/shared/utils/isExistUser";
import { validate } from "@/shared/utils/validate";

interface SignupProps {
  name: string;
  pass: string;
  users: UserType[];
  createUser: ({name, pass}:CreateUserProps) => void;
}

export const signup = async ({
  name,
  pass,
  users,
  createUser
} : SignupProps ) : Promise<boolean> => {
  if (!validate({name, pass})) {
    return false;
  }
  if (isExistUser({ users, name, pass })) {
    alert('already exists');
    return false;
  }
  createUser({name, pass});
  alert('signup success');
  return true;
}
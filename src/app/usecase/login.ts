import { UserType } from "@/shared/types/usertype";
import { isExistUser } from "@/shared/utils/isExistUser";
import { validate } from "@/shared/utils/validate";
import { createJWT } from "./createJWT";


interface LoginProps {
  users: UserType[];
  name: string;
  pass: string;
}

export const login = async ({
  users,
  name,
  pass
} : LoginProps ) : Promise<boolean> => {
  if (!validate({ name, pass})) {
    return false;
  }
  const user = isExistUser({ users, name, pass });
  if (user) {
    await createJWT({ uuid: user.uuid });
    return true;
  }
  return false;
}

import { deleteJWT } from "./deleteJWT";

export const logout = async ():Promise<boolean> => {
  await deleteJWT();
  return true;
}
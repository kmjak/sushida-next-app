import { getJWT } from "@/app/usecase/getJWT"

export const useJWT = () => {
  const handleGetJWT = async () => {
    return await getJWT();
  }

  return {
    handleGetJWT,
  }
}
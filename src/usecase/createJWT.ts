const JWT_URL = process.env.NEXT_PUBLIC_JWT_URL;

interface CreateJWTProps {
  uuid: string;
}
export const createJWT = async ({uuid}:CreateJWTProps):Promise<void> => {
  await fetch(JWT_URL+"create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: uuid }),
    credentials: 'include',
  });
}
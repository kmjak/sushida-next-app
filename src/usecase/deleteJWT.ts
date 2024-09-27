const JWT_URL = process.env.NEXT_PUBLIC_JWT_URL;

export const deleteJWT = async ():Promise<void> => {
  await fetch(JWT_URL+"delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: 'include',
  });
}
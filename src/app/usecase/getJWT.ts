const JWT_URL = process.env.NEXT_PUBLIC_JWT_URL;

export const getJWT = async ():Promise<string | null> => {
  const res = await fetch(JWT_URL+"get", {
    method: "GET",
    credentials: 'include',
  });
  const data = await res.json();
  if(data.id){
    return data.id;
  }else{
    return null;
  }
}
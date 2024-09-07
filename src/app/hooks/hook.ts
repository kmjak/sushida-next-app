import { v4 as uuidv4 } from 'uuid';

export function useAuth(name: string, pass: string, authMode: "login" | "signup", setName: React.Dispatch<React.SetStateAction<string>>, setPass: React.Dispatch<React.SetStateAction<string>>, setAuthMode: React.Dispatch<React.SetStateAction<"login" | "signup">>) {
  const changeAuthMode = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setAuthMode(authMode === "login" ? "signup" : "login");
  }

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch("http://localhost:3001/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const datas = await res.json();
    if (authMode === "login") {
      const user = datas.find((data: { name: string; pass: string; }) => data.name === name && data.pass === pass);
      if (user) {
        const r = await fetch("/services/jwt/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: user.uuid }),
          credentials: 'include',
        });
        const token = await r.json();
        console.log(token);
      }
    } else {
      if (datas.find((data: { name: string; }) => data.name === name)) {
        alert('already exists');
        return;
      }
      await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ uuid: uuidv4(), name, pass }),
      });
    }
  }
  return { submit, changeAuthMode };
}
import { UserType } from '@/types/usertype';
import { createUser, getAllUsers } from '@/api/json-server';
import { FormEvent } from 'react';

export async function handleSubmit(e: FormEvent<HTMLFormElement>, name: string, pass: string, authMode: string) {
  const Login = async (datas: UserType[]) => {
    const user = isExistUser({datas,name,pass});
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
      return true;
    }
    return false;
  }

  const Signup = async (datas: UserType[]) => {
    if (isExistUser({datas,name,pass})) {
      alert('already exists');
      return;
    }
    createUser(name, pass);
  }

  const isExistUser = ({datas,name,pass}: {datas:UserType[], name: string,pass:string}) => {
    return datas.find((data: { name: string; pass: string; }) => data.name === name && data.pass === pass);
  }

  e.preventDefault();
  const datas = await getAllUsers();
  if (authMode === "login") {
    const res = await Login(datas);
    if (res) {
      alert('login success');
    } else {
      alert('login failed');
    }
  } else {
    await Signup(datas);
  }
}
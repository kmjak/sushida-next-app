import { UserType } from '@/types/usertype';
import { createUser, getAllUsers } from '@/api/json-server';
import { FormEvent } from 'react';
import { NextRouter } from 'next/router';

const JWT_URL = process.env.NEXT_PUBLIC_JWT_URL;

export async function handleSubmit(e: FormEvent<HTMLFormElement>, name: string, pass: string, authMode: string, router: NextRouter) {
  e.preventDefault();

  const validate = (name: string, pass: string) => {
    if (!name || !pass) {
      alert("name or pass is empty");
      return false;
    }
    if(name.length < 1 || pass.length < 4){
      alert("name or pass is too short");
      return false;
    }
    if(name.length > 20 || pass.length > 20){
      alert("name or pass is too long");
      return false;
    }
    if(name.match(/[^A-Za-z0-9@_-]/)){
      alert("name is invalid");
      return false;
    }
    if(pass.match(/[^A-Za-z0-9@_-]/)){
      alert("pass is invalid");
      return false;
    }
    return true;
  }

  const Login = async (datas: UserType[], name: string, pass: string) => {
    if (!validate(name, pass)) {
      return false;
    }
    const user = isExistUser({ datas, name, pass });
    if (user) {
      await fetch(JWT_URL+"create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: user.uuid }),
        credentials: 'include',
      });
      return true;
    }
    return false;
  }

  const Signup = async (datas: UserType[],name:string,pass:string):Promise<boolean> => {
    if (!validate(name, pass)) {
      return false;
    }
    if (isExistUser({ datas, name, pass })) {
      alert('already exists');
      return false;
    }
    createUser(name, pass);
    return true;
  }


  const isExistUser = ({ datas, name, pass }: { datas: UserType[], name: string, pass: string }) => {
    return datas.find((data: { name: string; pass: string; }) => data.name === name && data.pass === pass);
  }
  const datas = await getAllUsers();
  if (authMode === "login") {
    const res = await Login(datas,name,pass);
    if (res) {
      router.push('/game');
    } else {
      alert('login failed');
    }
  } else {
    const res = await Signup(datas,name,pass);
    if (res) {
      return
    }
    alert('signup failed');
  }
}
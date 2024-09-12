import { UserType } from '@/types/usertype';
import { createUser, getAllUsers } from '@/api/json-server';
import { FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const JWT_URL = process.env.NEXT_PUBLIC_JWT_URL;

export async function handleSubmit(e: FormEvent<HTMLFormElement>, name: string, pass: string, authMode: string, router: ReturnType<typeof useRouter> ) {
  e.preventDefault();

  const validate = (name: string, pass: string) => {
    if (!name || !pass) {
      return false;
    }
    if(name.length < 1 || pass.length < 4){
      return false;
    }
    if(name.length > 20 || pass.length > 20){
      return false;
    }
    if(name.match(/[^A-Za-z0-9@_-]/)){
      return false;
    }
    if(pass.match(/[^A-Za-z0-9@_-]/)){
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
    alert('signup success');
    return true;
  }


  const isExistUser = ({ datas, name, pass }: { datas: UserType[], name: string, pass: string }) => {
    return datas.find((data: { name: string; pass: string; }) => data.name === name && data.pass === pass);
  }

  const datas = await getAllUsers();
  if (authMode === "login") {
    const res = await Login(datas,name,pass);
    if (res) {
      router.push('/verified');
    } else {
      alert('login failed');
    }
  } else {
    await Signup(datas,name,pass);
  }
}
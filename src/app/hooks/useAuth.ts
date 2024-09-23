import { UserType } from '@/shared/types/usertype';
import { createUser, getAllUsers } from '@/lib/json-server';
import { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getJWT } from '../usecase/getJWT';
import { signup } from '../usecase/signup';
import { login } from '../usecase/login';
import { logout } from '../usecase/logout';

export const useAuth = () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);
  const [logindata, setLogindata] = useState<UserType>();
  const [users, setUsers] = useState<UserType[]>([]);

  useEffect(() => {
    const fetchToken = async () => {
      const id = await getJWT();
      if(id){
        setIsAuthed(true);
        const user = users.find((user) => user.uuid === id);
        if(user){
          setLogindata(user);
        }
      }else{
        setIsAuthed(false);
      }
    }
    fetchToken();
  }
  ,[users])

  useEffect(() => {
    const fetchUsers = async () => {
      const datas = await getAllUsers()
      setUsers(datas);
    }
    fetchUsers();
  },[authMode])


  const handleSubmit = async (e:FormEvent<HTMLFormElement>) : Promise<void> => {
    e.preventDefault();
    if(authMode === "login"){
      handleLogin();
    }else{
      handleSignup();
    }
  }

  const handleSignup = async () : Promise<void> => {
    signup({name,pass,users,createUser});
  }

  const handleLogin = async () : Promise<void> => {
    const res = await login({users,name,pass});
    if (res) {
      router.push('/verified');
    } else {
      alert('login failed');
    }
  }

  const handleLogout = async () : Promise<void> => {
    const res = await logout();
    console.log(res);
    if (res) {
      setIsAuthed(false);
    }
  }

  return {
    setName,
    setPass,
    setAuthMode,
    name,
    pass,
    authMode,
    router,
    isAuthed,
    logindata,
    handleSubmit,
    handleLogout
  };
}
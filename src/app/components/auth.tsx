"use client";

import { useState, useEffect } from "react";
import React from 'react';
import { useRouter } from "next/navigation";
import { UserType } from "@/types/usertype";
import { getAllUsers } from "@/api/json-server";
import { AuthedComponent } from "./Authed";
import { AuthFormComponent } from "./AuthForm";

const JWT_URL = process.env.NEXT_PUBLIC_JWT_URL!;

export const AuthComponent= () => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const [isAuthed, setIsAuthed] = useState<boolean | null>(null);
  const [logindata, setLogindata] = useState<UserType>();

  useEffect(() => {
    const fetchToken = async () => {
      const res = await fetch(JWT_URL+"get", {
        method: "GET",
        credentials: 'include',
      });
      const data = await res.json();
      if(data.id){
        setIsAuthed(true);
        const res = await getAllUsers();
        setLogindata(res.find((user) => user.uuid === data.id));
      }else{
        setIsAuthed(false);
      }
    }
    fetchToken();
  }
  ,[]);

  const handleLogout = async () => {
    await fetch(JWT_URL+"delete", {
      method: "DELETE",
      credentials: 'include',
    });
    setIsAuthed(false);
  }

  if(isAuthed === null){
    return <h1 className="text-3xl font-semibold text-center">loading...</h1>
  }

  return (
    <>
      {isAuthed ? (
        <AuthedComponent logindata={logindata!} router={router} handleLogout={handleLogout} />
      ):(
        <AuthFormComponent name={name} pass={pass} authMode={authMode} router={router} setName={setName} setPass={setPass} setAuthMode={setAuthMode} />
      )}
    </>
  );
}

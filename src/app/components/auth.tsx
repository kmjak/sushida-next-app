"use client";

import { useState, FormEvent, useEffect } from "react";
import React from 'react';
import { handleSubmit } from "../hooks/hook";
import { useRouter } from "next/navigation";
import { UserType } from "@/types/usertype";
import { getAllUsers } from "@/api/json-server";

const JWT_URL = process.env.NEXT_PUBLIC_JWT_URL!;

export const AuthForm= () => {
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
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold text-center">You are logged in as {logindata?.name}</h1>
          <p>
            <button
              onClick={() => router.push("/verified/")}
              className="bg-blue-500 text-white rounded p-2 m-2 w-64"
            >
              login
            </button>
          </p>
          <p>
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white rounded p-2 m-2 w-64"
            >
              logout
            </button>
          </p>
        </div>
      ):(
        <form className="flex flex-col items-center bg-gray-100 px-6 py-16 rounded shadow-md" onSubmit={(e:FormEvent<HTMLFormElement>) => handleSubmit(e,name,pass,authMode,router)}>
          <h1 className="text-3xl font-semibold mb-6">{authMode}</h1>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
            className="border border-gray-300 rounded p-2 m-2 w-64"
          />
          <input
            type="password"
            value={pass}
            placeholder="password"
            onChange={(e) => setPass(e.target.value)}
            className="border border-gray-300 rounded p-2 m-2 w-64"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white rounded p-2 m-2 w-64"
          >
            {authMode}
          </button>
          <button
            type="button"
            onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")}
            className="text-blue-500 underline"
          >
            {authMode === "login" ? "signup" : "login"}
          </button>
        </form>
      )}
    </>
  );
}

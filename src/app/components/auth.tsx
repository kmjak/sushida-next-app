"use client";

import React from 'react';
import { AuthedComponent } from "./Authed";
import { AuthFormComponent } from "./AuthForm";
import { useAuth } from '@/hooks/useAuth';


export const AuthComponent= () => {
  const {
    setName,
    setPass,
    setAuthMode,
    name,
    pass,
    authMode,
    router,
    isAuthed,
    logindata,
    handleLogout,
    handleSubmit,
  } = useAuth();

  if(isAuthed === null){
    return <h1 className="text-3xl font-semibold text-center">loading...</h1>
  }

  return (
    <>
      {isAuthed ? (
        <AuthedComponent
          logindata={logindata!}
          router={router}
          handleLogout={handleLogout}
        />
      ):(
        <AuthFormComponent
          name={name}
          pass={pass}
          authMode={authMode}
          setName={setName}
          setPass={setPass}
          setAuthMode={setAuthMode}
          handleSubmit={handleSubmit}
        />
      )}
    </>
  );
}

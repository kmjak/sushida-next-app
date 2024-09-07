"use client";

import { useState } from "react";
import { useAuth } from "./hooks/hook";
import { AuthForm } from "./components/auth";

export default function Page() {
  const [name, setName] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [authMode, setAuthMode] = useState<"login" | "signup">("login");
  const { submit, changeAuthMode } = useAuth(name, pass, authMode, setName, setPass, setAuthMode);

  return (
    <div className="container mx-auto flex items-center justify-center h-full bg-white">
      <AuthForm
        name={name}
        pass={pass}
        onNameChange={e => setName(e.target.value)}
        onPassChange={e => setPass(e.target.value)}
        authMode={authMode}
        onSubmit={submit}
        onChangeAuthMode={changeAuthMode}
      />
    </div>
  );
}
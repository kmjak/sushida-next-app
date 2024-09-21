import { FormEvent } from "react";

interface AuthFormProps {
  name: string;
  pass: string;
  authMode: string;
  setName: (name: string) => void;
  setPass: (pass: string) => void;
  setAuthMode: (authMode: "login" | "signup") => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}

export const AuthFormComponent = ({
  name,
  pass,
  authMode,
  setName,
  setPass,
  setAuthMode,
  handleSubmit
} : AuthFormProps ) => {
  return(
    <form
      className="flex flex-col items-center bg-gray-100 px-6 py-16 rounded shadow-md"
      onSubmit={(e:FormEvent<HTMLFormElement>) => handleSubmit(e)}
    >
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
  )
}
import React from 'react';

type AuthFormProps = {
  name: string;
  pass: string;
  authMode: "login" | "signup";
  onNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPassChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeAuthMode: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const AuthForm: React.FC<AuthFormProps> = ({ name, pass,authMode, onNameChange, onPassChange, onSubmit, onChangeAuthMode }) => {
  return (
    <form className="flex flex-col items-center bg-gray-100 px-6 py-16 rounded shadow-md" onSubmit={onSubmit}>
      <h1 className="text-3xl font-semibold mb-6">{authMode}</h1>
      <input
        type="text"
        value={name}
        onChange={onNameChange}
        placeholder="name"
        className="border border-gray-300 rounded p-2 m-2 w-64"
      />
      <input
        type="password"
        value={pass}
        placeholder="password"
        onChange={onPassChange}
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
        onClick={onChangeAuthMode}
        className="text-blue-500 underline"
      >
        {authMode === "login" ? "signup" : "login"}
      </button>
    </form>
  );
}

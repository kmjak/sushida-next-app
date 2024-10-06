import { UserType } from '@/shared/types/Usertype';
import { useRouter } from 'next/navigation';

interface AuthedComponentProps {
  logindata: UserType;
  router: ReturnType<typeof useRouter>;
  handleLogout: () => void;
}

export const AuthedComponent = ({
  logindata,
  router,
  handleLogout
} : AuthedComponentProps ) => {
  return (
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
  );
}
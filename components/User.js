import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <Image
          src={session.user.image}
          alt="user"
          onClick={signOut}
          width="100"
          height="100"
          className={`h-10 w-10 rounded-full hover:bg-gray-200 cursor-pointer p-1 ${className}`}
        />
      </>
    );
  }
  return (
    <>
      <button
        onClick={signIn}
        className={`bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md ${className}`}
      >
        Sign in
      </button>
    </>
  );
}

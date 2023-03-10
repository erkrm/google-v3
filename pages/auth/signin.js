import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

export default function signin({ providers }) {
  return (
    <>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <picture>
              <img
                className="w-52 object-cover"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
                alt="google"
              />
            </picture>
            <p className="text-sm italic my-10 text-center">
              This website is created for learning purposes
            </p>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              className="bg-red-500 rounded-lg text-white p-3 hover:bg-red-600"
            >
              Sign in with Google
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

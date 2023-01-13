import Image from 'next/image';
import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import User from './User';

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  function search(event) {
    event.preventDefault();

    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}`);
  }
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          className="cursor-pointer"
          onClick={() => router.push('/')}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
          alt="logo"
          width="120"
          height="40"
          objectFit="contain"
        />
        <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none "
          />
          <XIcon
            onClick={() => (searchInputRef.current.value = '')}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3"
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 mr-3" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button type="submit" onClick={search} hidden></button>
        </form>
        <User className="ml-auto whitespace-nowrap" />
      </div>
    </header>
  );
}

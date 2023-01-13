import { useRouter } from 'next/router';
import React from 'react';
import SearchHeaderOption from './SearchHeaderOption';
import { SearchIcon, PhotographIcon } from '@heroicons/react/solid';

export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className="flex space-x-8 select-none w-full mx-auto justify-center text-sm text-gray-700 lg:pl-52 lg:justify-start md:justify-start md:pl-52 border-b">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        selected={router.query.searchType === '' || !router.query.searchType}
      />
      <SearchHeaderOption
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === 'image'}
      />
    </div>
  );
}

import Head from 'next/head';
import React from 'react';
import SearchHeader from '../components/SearchHeader';
import Response from '../Response';
import SearchResult from '../components/SearchResult';
import { useRouter } from 'next/router';

export default function search({ results }) {
  console.log(results);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      {/** SEARCH HEADER */}

      <SearchHeader />

      {/** SEARCH RESULT */}

      <SearchResult results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const mockData = true;
  const data = mockData
    ? Response
    : await fetch(`
  https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
        process.env.CONTEXT_KEY
      }&q=${context.query.term}${
        context.query.searchType && '&searchType=image'
      }`).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}

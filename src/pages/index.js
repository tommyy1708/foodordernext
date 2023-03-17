import React from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
const Home = () => {

  return (
    <div>
      <Head>
        <link rel="stylesheet" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <Banner/>
    </div>
  )
}

export default Home
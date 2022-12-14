import type { NextPage } from "next";
import Head from "next/head";
import { Header, Form, Footer } from "../components/signin";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <Header />
        <Form />
        <Footer />
      </main>
    </div>
  );
};

export default Home;

import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../../components/dashboard/Sidebar";
import Header from "../../components/dashboard/Header";

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-screen flex overflow-hidden bg-gray-100">
        <Sidebar />
        <Header />
      </main>
    </div>
  );
};

export default Dashboard;

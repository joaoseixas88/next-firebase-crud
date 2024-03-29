import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "../components/Button";
import { Layout } from "../components/Layout";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useSelector } from "react-redux";
import { TableProps } from "../components/Table";
import { RootState } from "../store/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clientsGetRequest } from "../store/ducks/clients/actions";
import { ClipLoader } from "react-spinners";
import { MobileCard } from "../components/MobileCard";
import { useMediaQuery } from "react-responsive";
const Table = dynamic<TableProps>(
  () => import("../components/Table").then((module) => module.Table),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  const { data, loading, error } = useSelector(
    (store: RootState) => store.clients
  );

  const isMobile = useMediaQuery({ query: "(max-width: 750px)" });
  const dispatch = useDispatch();
  data;

  useEffect(() => {
    dispatch(clientsGetRequest());
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className={`flex h-5/6 w-full justify-center overflow-hidden`}>
          <Layout title="Cadastro Simples">
            <div className={`pb flex justify-end pb-2`}>
              <Link href={"/form"}>
                <Button color="blue">Novo usuário</Button>
              </Link>
            </div>
            {loading ? (
              <div className={`flex w-full justify-center p-20`}>
                <ClipLoader />
              </div>
            ) : isMobile ? (
              <div>
                <h1
                  className={` rounded-md  bg-gradient-to-r from-purple-600 to-purple-800 text-center text-lg text-white`}
                >
                  {" "}
                  Usuarios
                </h1>
                {data.length === 0 ? (
                  <div className={`flex justify-center p-5 text-center`}>
                    <p>Voce nao tem usuários cadastrados </p>
                  </div>
                ) : (
                  data.map((client) => {
                    return (
                      <div key={client.id} className={`m-4 h-1/5 `}>
                        <MobileCard client={client} />
                      </div>
                    );
                  })
                )}
              </div>
            ) : (
              <Table clients={data} />
            )}
          </Layout>
        </div>
      </div>
    </div>
  );
};

export default Home;

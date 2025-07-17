import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout/Layout";

const Custom404 = (): JSX.Element => (
    <>
        <Head>
            <title>404</title>
        </Head>

        <Layout>
            <div className="text-center">
                <h1>404</h1>
                <p>
                    This page does not exists. Please return to{" "}
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </p>
            </div>
        </Layout>
    </>
);

export default Custom404;

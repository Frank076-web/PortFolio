import Head from "next/head";
import Layout from "../components/Layout/Layout";
import AcercaMain from "../components/acerca/AcercaMain";

const Acerca = (): JSX.Element => {
    <Head>
        <title>Acerca</title>
    </Head>;

    return (
        <Layout>
            <AcercaMain />
        </Layout>
    );
};

export default Acerca;

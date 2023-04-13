import React, { useState } from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';

const CsrPage = () => {
    const [count, setCount] = useState(0);

    return (
        <Layout>
            <Head>
                <title>CSR Page</title>
            </Head>
            <div>
                <h1>CSR Page</h1>
                <p>You clicked {count} times.</p>
                <button onClick={() => setCount(count + 1)}>Click me</button>
            </div>
        </Layout>

    );
};

export default CsrPage;

export const getServerSideProps = async () => {
    return { props: {} };
};
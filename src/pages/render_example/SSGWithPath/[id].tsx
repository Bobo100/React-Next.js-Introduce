import React, { useEffect } from 'react';
import Layout from '../../../components/layout';
import Head from 'next/head';

type Props = {
    content: string;
    time: string;
};

const SsgWithPathPage = ({ time, content }: Props) => {

    useEffect(() => {
        console.log("SSG Page");
    }, []);

    return (
        <Layout>
            <Head>
                <title>SSG Page</title>
            </Head>
            <div>
                <h1>SSG Page</h1>
                <p>{content}</p>
                <p>build的時候的時間 {time}，因為這是SSG，所以這個時間不會再變動。</p>
            </div>
        </Layout>

    );
};

export async function getStaticProps() {
    // 在這裡撰寫程式碼，來取得資料，然後再將資料傳遞給元件。
    const content = "這是從getStaticProps中取得的資料。也就是說，我們可以在這裡撰寫程式碼，來取得資料，然後再將資料傳遞給元件。";

    return {
        props: {
            content,
            time: new Date().toISOString()
        }
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { id: '1' } },
            { params: { id: '2' } },
            { params: { id: '3' } },
        ],
        fallback: false
    };
}

export default SsgWithPathPage;

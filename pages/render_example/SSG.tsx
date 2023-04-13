import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';

type Props = {
    content: string;
    time: string;
};

const SsgPage = ({ time, content }: Props) => {
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

    // const res = await fetch('https://api.countapi.xyz/hit/nextjs-example/ssg');
    // const json = await res.json();
    // return { props: { count: json.value }, revalidate: 1 };
}

export default SsgPage;

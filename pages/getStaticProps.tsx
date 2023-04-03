import Head from "next/head";
import Layout from "../components/layout";

function NextStaticProps({ content }) {
    return (
        <Layout>
            <Head>
                <title>靜態生成</title>
            </Head>
            <h1>靜態生成</h1>
            <p>{content}</p>
        </Layout>
    );
}

export async function getStaticProps() {
    // 在这里获取并处理数据
    const content = "這是從getStaticProps中取得的資料。也就是說，我們可以在這裡撰寫程式碼，來取得資料，然後再將資料傳遞給元件。";

    return {
        props: {
            content,
        },
    };
}

export default NextStaticProps;

import Layout from '../../components/layout';
import Head from 'next/head';

type Props = {
    time: string;
};

const IsrPage = ({ time }: Props) => {
    // 強制revalidate
    function revalidate() {
        fetch('/api/revalidate');
    }

    return (
        <Layout>
            <Head>
                <title>ISR Page</title>
            </Head>
            <div>
                <h1>ISR Page</h1>
                <p>現在時間 {time}</p>
                <p>revalidate 設定是60秒</p>
                <button onClick={() => revalidate()}>手動強制revalidate</button>
            </div>
        </Layout>
    );
};

export async function getStaticProps() {
    /* 
    revalidate是在 Next.js 中用於確定靜態頁面的重新驗證間隔時間的屬性。
    當您的網站有大量的用戶訪問時，您可能希望在一定時間內重新生成靜態頁面內容以確保數據的準確性。這可以通過設置 revalidate 屬性來實現，在這裡，您可以指定以秒為單位的重新驗證時間間隔。
    例如，在上面的示例中，revalidate 的值是1，這意味著每秒最多只能重新生成此頁面一次，即使有更多的用戶訪問它也是如此。如果沒有更改，則Next.js將直接從緩存中提供先前生成的靜態頁面。
    */
    /* 
    加上revalidate 就等於從SSG變成ISR
    */
    return {
        props: {
            time: new Date().toISOString()
        }, revalidate: 60
    };
}

export default IsrPage;




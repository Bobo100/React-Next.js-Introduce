import Head from "next/head";
import Layout from "../../components/layout";
import Link from "next/link";

function A() {
    return (
        <Layout>
            <Head>
                <title>A</title>
            </Head>
            <h1>A</h1>
            <Link href={{ pathname: '/NextjsAPI/B', query: { from: 'A' } }}>
                從A前往B，會成功！
            </Link>
            <Link href={{ pathname: '/NextjsAPI/C', query: { from: 'A' } }}>
                從A前往C (不會成功) 而且因為我們也設定了B 必須是從A前往，所以會被導回A
            </Link>
        </Layout>
    )
}

export default A
import Head from "next/head";
import Layout from "../components/layout";

function NextRoutes() {
    return (
        <Layout>
            <Head>
                <title>自動化的路由</title>
            </Head>
            <h1>自動化的路由</h1>
            <p>在以前使用react-router-dom的時候，我們需要在App.js中撰寫路由。但在Next.js中，我們不需要這樣做，因為Next.js已經幫我們做好了。</p>
            <p>在Next.js中，我們只需要在pages資料夾中建立一個檔案，並且在檔案中撰寫程式碼，就可以建立一個路由。</p>
            <p>例如：我們在pages資料夾中建立一個styles-nextjs.tsx檔案，並且在裡面撰寫程式碼，就可以建立一個路由，這個路由的網址為：http://localhost:3000/styles-nextjs</p>
        </Layout>
    );
}

export default NextRoutes;
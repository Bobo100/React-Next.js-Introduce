import React from 'react';

type Props = {
    content: string;
};

const SsgPage = ({ content }: Props) => {
    return (
        <div>
            <h1>SSG Page</h1>
            <p>{content}</p>
        </div>
    );
};

export async function getStaticProps() {
    // 在这里获取并处理数据
    const content = "這是從getStaticProps中取得的資料。也就是說，我們可以在這裡撰寫程式碼，來取得資料，然後再將資料傳遞給元件。";

    /* 
    revalidate是在 Next.js 中用於確定靜態頁面的重新驗證間隔時間的屬性。

    當您的網站有大量的用戶訪問時，您可能希望在一定時間內重新生成靜態頁面內容以確保數據的準確性。這可以通過設置 revalidate 屬性來實現，在這裡，您可以指定以秒為單位的重新驗證時間間隔。

    例如，在上面的示例中，revalidate 的值是1，這意味著每秒最多只能重新生成此頁面一次，即使有更多的用戶訪問它也是如此。如果沒有更改，則Next.js將直接從緩存中提供先前生成的靜態頁面。
    */
    return {
        props: {
            content,
        },
        revalidate: 1,
    };

    // const res = await fetch('https://api.countapi.xyz/hit/nextjs-example/ssg');
    // const json = await res.json();
    // return { props: { count: json.value }, revalidate: 1 };
}

export default SsgPage;

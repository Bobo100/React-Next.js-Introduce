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

    return {
        props: {
            content,
        }
    };

    // const res = await fetch('https://api.countapi.xyz/hit/nextjs-example/ssg');
    // const json = await res.json();
    // return { props: { count: json.value }, revalidate: 1 };
}

export default SsgPage;

import { useEffect, useState } from 'react';

type Props = {
    count: number;
};

const IsrPage_keep = ({ count }: Props) => {
    const [newCount, setNewCount] = useState(count);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const res = await fetch('https://api.countapi.xyz/hit/nextjs-example/isr');
            const json = await res.json();
            setNewCount(json.value);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div>
            <h1>ISR Page</h1>
            <p>You clicked {newCount} times.</p>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://api.countapi.xyz/hit/nextjs-example/isr');
    const json = await res.json();
    /* 
    revalidate是在 Next.js 中用於確定靜態頁面的重新驗證間隔時間的屬性。
    當您的網站有大量的用戶訪問時，您可能希望在一定時間內重新生成靜態頁面內容以確保數據的準確性。這可以通過設置 revalidate 屬性來實現，在這裡，您可以指定以秒為單位的重新驗證時間間隔。
    例如，在上面的示例中，revalidate 的值是1，這意味著每秒最多只能重新生成此頁面一次，即使有更多的用戶訪問它也是如此。如果沒有更改，則Next.js將直接從緩存中提供先前生成的靜態頁面。
    */
    /* 
    加上revalidate 就等於從SSG變成ISR
    */
    return { props: { count: json.value }, revalidate: 1 };
}

export default IsrPage_keep;




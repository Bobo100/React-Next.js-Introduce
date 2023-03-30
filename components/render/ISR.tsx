import React from 'react';

type Props = {
    count: number;
};

const IsrPage = ({ count }: Props) => {
    const [newCount, setNewCount] = React.useState(count);

    React.useEffect(() => {
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
    return { props: { count: json.value }, revalidate: 1 };
}

export default IsrPage;

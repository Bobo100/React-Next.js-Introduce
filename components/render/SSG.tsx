import React from 'react';

type Props = {
    count: number;
};

const SsgPage = ({ count }: Props) => {
    return (
        <div>
            <h1>SSG Page</h1>
            <p>You clicked {count} times.</p>
        </div>
    );
};

export async function getStaticProps() {
    const res = await fetch('https://api.countapi.xyz/hit/nextjs-example/ssg');
    const json = await res.json();
    return { props: { count: json.value }, revalidate: 1 };
}

export default SsgPage;

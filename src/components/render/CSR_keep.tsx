import React from 'react';

const CsrPage_keep = () => {
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <h1>CSR Page</h1>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>Click me</button>
        </div>
    );
};

export default CsrPage_keep;

export const getServerSideProps = async () => {
    return { props: {} };
};
import { GetServerSideProps } from 'next';

type Props = {
    data: {
        name: string;
        message: string;
    };
};

const SsrPage = ({ data }: Props) => {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.message}</p>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    return {
        props: {
            data: {
                name: data.title,
                message: data.body,
            },
        },
    };
};

export default SsrPage;

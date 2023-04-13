import { GetServerSideProps } from 'next';

type Props = {
    data: {
        name: string;
        message: string;
    };
};

const SsrPage_keep = ({ data }: Props) => {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.message}</p>
        </div>
    );
};

// 如果你有一些數據要在頁面渲染之前先取得，你可以使用 getServerSideProps 來達成這個目的。這個方法會在每次請求時都會被呼叫，所以你可以在這裡面做一些資料庫查詢或是 API 請求，然後再將資料傳遞給頁面。
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

export default SsrPage_keep;

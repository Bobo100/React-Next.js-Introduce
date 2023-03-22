import Link from "next/link";
import { useRouter } from "next/router";

const RoutesLink = () => {
    const router = useRouter();
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>回到首頁</Link>
            <Link href="/styles-nextjs" className={router.pathname === "/styles-nextjs" ? "active" : ""}>Next.js中的樣式</Link>
          
        </>
    );
};

export default RoutesLink;
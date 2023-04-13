import Link from "next/link";
import { useRouter } from "next/router";

const RoutesLink = () => {
    const router = useRouter();
    // 有問題！！
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>回到首頁</Link>
            <Link href="/NextjsWorks" className={router.pathname === "/NextjsWorks" ? "active" : ""}>Next.js做了什麼</Link>
            <Link href="/NextjsRender" className={router.pathname === "/NextjsRender" ? "active" : ""}>Next.js渲染模式</Link>
            <Link href="/NextjsStyles" className={router.pathname === "/Nextjs_styles" ? "active" : ""}>Next.js中的樣式</Link>
            <Link href="/NextjsRoutes" className={router.pathname === "/NextjsRoutes" ? "active" : ""}>自動化的路由</Link>
            <Link href="/NextjsImage" className={router.pathname === "/NextjsImage" ? "active" : ""}>Next.js中的圖片</Link>
            <Link href="/NextjsAPI" className={router.pathname === "/NextjsAPI" ? "active" : ""}>Next.js中的API</Link>
        </>
    );
};

export default RoutesLink;
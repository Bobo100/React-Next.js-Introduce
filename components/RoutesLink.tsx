import Link from "next/link";
import { useRouter } from "next/router";

const RoutesLink = () => {
    const router = useRouter();
    // 有問題！！
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>回到首頁</Link>
            <Link href="/nextjs_works" className={router.pathname === "/nextjs_works" ? "active" : ""}>Next.js做了什麼</Link>
            <Link href="/nextjs_render" className={router.pathname === "/nextjs_render" ? "active" : ""}>Next.js渲染模式</Link>
            <Link href="/nextjs_styles" className={router.pathname === "/nextjs_styles" ? "active" : ""}>Next.js中的樣式</Link>
            <Link href="/nextjs_routes" className={router.pathname === "/nextjs_routes" ? "active" : ""}>自動化的路由</Link>
            <Link href="/nextjs_image" className={router.pathname === "/nextjs_image" ? "active" : ""}>Next.js中的圖片</Link>
            <Link href="/nextjs_api" className={router.pathname === "/nextjs_api" ? "active" : ""}>Next.js中的API</Link>
        </>
    );
};

export default RoutesLink;
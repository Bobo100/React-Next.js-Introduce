import Link from "next/link";
import { useRouter } from "next/router";

const RoutesLink = () => {
    const router = useRouter();
    // 有問題！！
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>回到首頁</Link>
            <Link href="/Nextjs_works" className={router.pathname === "/Nextjs_works" ? "active" : ""}>Next.js做了什麼</Link>
            <Link href="/Nextjs_render" className={router.pathname === "/Nextjs_render" ? "active" : ""}>Next.js渲染模式</Link>
            <Link href="/Nextjs_styles" className={router.pathname === "/Nextjs_styles" ? "active" : ""}>Next.js中的樣式</Link>
            <Link href="/Nextjs_routes" className={router.pathname === "/Nextjs_routes" ? "active" : ""}>自動化的路由</Link>
            <Link href="/Nextjs_image" className={router.pathname === "/Nextjs_image" ? "active" : ""}>Next.js中的圖片</Link>
            <Link href="/Nextjs_api" className={router.pathname === "/Nextjs_api" ? "active" : ""}>Next.js中的API</Link>
        </>
    );
};

export default RoutesLink;
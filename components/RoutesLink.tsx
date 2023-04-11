import Link from "next/link";
import { useRouter } from "next/router";

const RoutesLink = () => {
    const router = useRouter();
    return (
        <>
            <Link href="/" className={router.pathname === "/" ? "active" : ""}>回到首頁</Link>
            <Link href="/Nextjs_Works" className={router.pathname === "/Nextjs_Works" ? "active" : ""}>Next.js做了什麼</Link>
            <Link href="/Nextjs_render" className={router.pathname === "/Nextjs_render" ? "active" : ""}>Next.js渲染模式</Link>
            <Link href="/styles-nextjs" className={router.pathname === "/styles-nextjs" ? "active" : ""}>Next.js中的樣式</Link>
            <Link href="/auto-routes" className={router.pathname === "/auto-routes" ? "active" : ""}>自動化的路由</Link>
            <Link href="/image-nextjs" className={router.pathname === "/image-nextjs" ? "active" : ""}>Next.js中的圖片</Link>
        </>
    );
};

export default RoutesLink;
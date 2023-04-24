import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
    children: React.ReactNode;
}
export default function Layout({ children }: LayoutProps) {
    return (<div className="App">
        <Navbar />
        <div className="container">
            {children}
            <Footer />
        </div>
    </div>);
}
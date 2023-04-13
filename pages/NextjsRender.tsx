import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";
import { Prism } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const NextjsRender = () => {
    return (
        <Layout>
            <Head>
                <title>Nextjs 渲染模式!</title>
            </Head>
            <div>
                <h1>Nextjs 渲染模式?</h1>

                <p>接續前面的內容。解惑部分：</p>

                <h2>渲染模式</h2>
                <p>1. Client Side Rendering (CSR)</p>
                <p>2. Server Side Rendering (SSR)</p>
                <p>3. Static Site Generation (SSG)</p>
                <p>4. Incremental Static Regeneration (ISR)</p>

                <Image src="/images/rendering.jpg" width={800} height={800} alt="" />

                <h2>Client Side Rendering (CSR)</h2>
                <p>客戶端渲染（Client-side rendering，CSR）表示使用 JavaScript 直接在瀏覽器中呈現頁面。所有邏輯、數據提取、模板和路由都在客戶端處理，而不是在服務器上處理。</p>
                <p>在 CSR 中，服務器返回一個空的 HTML 頁面和一個處理所有邏輯的 JavaScript bundle。</p>
                <p>優點：</p>
                <ul>
                    <li>可用於創建具有動態內容的頁面。</li>
                    <li>不像 SSG 會增加服務器成本。</li>
                    <li>初始加載後，加載其他頁面非常快速。</li>
                </ul>
                <p>缺點：</p>
                <ul>
                    <li>SEO 不如 SSR 和 SSG。</li>
                    <li>初始化加載時間慢且開始互動的時間長，導致性能差。</li>
                </ul>
                <p className="hightlight">使用時機</p>
                <p>CSR 非常適合任何不大依賴於 SEO 的站點。它可用於使用 Tauri 或 Electron 等工具創建豐富的網站互動和 Web 和跨平台應用程式。</p>

                <h2>Server Side Rendering (SSR)</h2>
                <p>伺服器端渲染（Server-side rendering，SSR）是應用程式生成網頁時不僅在瀏覽器中呈現，也可在伺服器上渲染整個頁面的能力。伺服器端傳送一個完全渲染的頁面給客戶端，客戶端JavaScript捆綁包接管並允許SPA框架運作。</p>
                <p>在 SSR 中，由於頁面是在伺服器上渲染並發送到客戶端，因此可以使用動態數據，同時仍然具有優秀的 SEO。</p>
                <p>優點：</p>
                <ul>
                    <li>可用於創建具有動態內容的網頁。</li>
                    <li>雖然不像 SSG 那樣快速，但 SSR 具有快速的感知性能，因為可見內容在頁面加載後立即顯示。</li>
                    <li>有利於搜索引擎優化（SEO）。</li>
                </ul>
                <p>缺點：</p>
                <ul>
                    <li>由於每次請求都需要重新渲染頁面，因此對於大型網站來說，性能可能會受到影響。</li>
                    <li>由於需要在服務器上渲染頁面，因此 SSR 會增加服務器成本。</li>
                </ul>
                <p className="hightlight">使用時機</p>
                <p>由於 SSR 可能顯著增加伺服器成本，因此應節制使用，僅在具有高度動態內容且經常發生變化的網站上使用，並且強烈依賴 SEO。例如，股票報價網站可能會從有機搜索中吸引用戶。</p>

                <h2>Static Site Generation (SSG)</h2>
                <p>靜態網頁產生器是一種根據原始數據和一組模板生成完整靜態 HTML 網站的過程。基本上，靜態網頁產生器自動化了編寫單個 HTML 頁面的任務，並在事先準備好這些頁面以供用戶使用。</p>
                <p>簡單來說，SSG 預先渲染網站的所有頁面，並根據客戶端的請求作出響應。</p>
                <p>優點：</p>
                <ul>
                    <li>由於頁面是在構建期間預先渲染的(靜態網頁是最快的 web 頁面形式，因為它們是預先製作好的，可以立即提供給用戶。)，因此對於大型網站來說，性能非常好。</li>
                    <li>靜態網頁產生器提供了生成完全靜態基於 HTML 的網站的能力，需要很少或沒有數據庫或服務器端進程。</li>
                    <li>由於網站是預先製作好的，內容更加安全。</li>
                    <li>有利於搜索引擎優化（SEO）。</li>
                </ul>
                <p>缺點：</p>
                <ul>
                    <li>內容編輯和發布很困難。編輯者可能需要訪問 Git 存儲庫而不是簡單的 Web 应用程序界面。</li>
                    <li>內容更新需要重新構建、測試和最終部署網站。</li>
                    <li>維護大型網站變得很困難，更不用說巨大的構建時間了。</li>
                </ul>
                <p className="hightlight">使用時機</p>
                <p>即使 SSG 有很多好處，你只應在內容很少或不經常變化的網站上使用它，比如產品展示網站。
                    如果你有一個博客網站，並且能夠接受每次修改都需要重新部署整個站點，那麼你可以使用 SSG。
                    對於任何形式的動態內容網站，SSG 是嚴格禁止的。</p>

                <h2>Incremental Static Regeneration (ISR)</h2>
                <p>增量式靜態再生（Incremental Static Regeneration，ISR）允許您在每個頁面上使用靜態生成，而無需重新建立整個網站。使用 ISR 可以保留靜態網站的優點，同時擴展至數百萬頁面。</p>
                <p>ISR 非常強大，因為它將 SSG 和 SSR 的優點結合起來，創建了一個更高效和可擴展的解決方案。</p>
                <p>優點：</p>
                <ul>
                    <li>與 SSG 一樣，由於預渲染頁面並進行快取，因此 ISR 極其快速。</li>
                    <li>內容修改不需要重新部署站點。</li>
                    <li>有利於搜索引擎優化（SEO）。</li>
                </ul>
                <p>缺點：</p>
                <ul>
                    <li>ISR 的一個巨大缺點是，如果用戶在內容被修改後訪問站點，但新版本的站點尚未可用，則可能會查看過期的內容。</li>
                </ul>
                <p>因為是看revalidate的時間，如果revalidate的時間是1秒，那麼每次訪問都會重新生成一次，如果revalidate的時間是1天，那麼每天只會重新生成一次。</p>
                <p>這期間就算資料庫有更新，也不會重新生成，只有在revalidate的時間過後，才會重新生成。
                    (例如我有在getStaticProps裡面寫一個fetch，每次訪問都會重新生成，
                    但是我在revalidate裡面寫了1天，那麼每天只會重新生成一次，這期間就算我有在fetch裡面寫一個console.log，也不會重新生成，只有在revalidate的時間過後，才會重新生成。)</p>
                <p className="hightlight">使用時機</p>
                <p>理想情況下，當您擁有的網站內容是動態的，但不經常發生更改時，應使用 ISR。這類站點的幾個示例是博客或個人網站。</p>


                <Image src="/images/rendering.jpg" width={800} height={800} alt="" />

                <h1>一問一答：</h1>
                <h2>ISR SSR SSG的build 意思是 把tsx檔案 打包成js 並先執行 所以才會有 有內容的html嗎?</h2>
                <p>對於 ISR、SSR 和 SSG，頁面的 HTML 都是在服務器端預先生成並發送到客戶端。<br />
                    在構建期間，Next.js 會將所有的頁面組件打包成 JS 文件，然後在服務端執行這些組件，生成相應的 HTML 文件。<br />
                    這些 HTML 文件包含了在組件內部進行數據請求、計算等操作所產生的數據。<br />
                    在客戶端下載這些 HTML 文件後，會進行頁面初始化，包括對 React 組件的渲染和實例化。<br />
                    之後，客戶端會執行重新 hydration 的過程，即使用 JavaScript 代碼將前端已渲染的靜態 HTML 頁面轉換為 React 組件，並調用其中的 useState 和 useEffect 鉤子函數等實現頁面的動態交互。</p>

                <h2>在SSG 與 ISR的情況下 佈署到server進行build的時候 就會把useEffect先執行過一次
                    之後 client下載後 載入 又會再執行一次 對吧?</h2>
                <p>是的，這是 SSR、SSG 和 ISR 的共同特點，即在服務器端執行組件，生成 HTML 文件，並在客戶端下載這些 HTML 文件後，進行頁面初始化。之後會再次執行組件，進行頁面的動態交互。</p>
                <p>所以，useEffect 鉤子函數中的代碼會在 SSR、SSG 和 ISR 的情況下被執行兩次。</p>

                <Prism language="javascript" style={vscDarkPlus}>
                    {`useEffect(() => {
    fetch('https：//api.countapi.xyz/hit/nextjs-example/isr')
        .then(res => res.json())
        .then(json => console.log(json));
}, []);`}
                </Prism>

                <p>在 SSG 和 ISR 的情況下，頁面會在服務器端預先生成靜態頁面，並在構建期間執行 useEffect 鉤子函數中的代碼。
                    當客戶端下載並渲染完頁面後，也會再次執行 useEffect 中的代碼。
                    因此，對於像您提供的代碼示例，fetch 請求會在服務器端和客戶端兩個階段都被執行。</p>
                
                {/* 補充一下 ISR 到底是 SSG 還是 SSR作法過來的 */}

            </div>

        </Layout>
    );
};

export default NextjsRender;
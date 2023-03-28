import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

// How Next.js Works
const Nextjs_Works = () => {
    return (
        <Layout>
            <Head>
                <title>Nextjs Works!</title>
            </Head>
            <div>
                <h1>Nextjs Works! Next做了什麼?</h1>
                <h2>Compiling</h2>
                <p>
                    當我們在開發的時候，我們會使用最新的JavaScript語法，但是瀏覽器並不支援這些語法，所以在編譯的時候，Next.js會把這些語法轉換成瀏覽器可以理解的語法。
                </p>

                <h2>Minifying</h2>
                <p>
                    當我們在開發的時候，寫的程式碼會有許多空白、註解、換行等等，這些都是為了讓程式碼更容易閱讀，但是這些在瀏覽器中是沒有用的，所以在編譯的時候，Next.js會把這些都移除，這樣可以讓程式碼更小，也可以讓瀏覽器載入的更快。
                </p>

                <h2>Bundling</h2>
                <p>
                    當我們在開發的時候，我們會把程式碼分成許多個檔案，導致我們需要載入許多個檔案，這樣會讓瀏覽器載入的時間變長，所以在編譯的時候，Next.js會把這些檔案合併成一個檔案，這樣可以讓瀏覽器載入的時間變短。
                </p>

                <h2>Code Splitting</h2>
                <p>
                    將Bundle分成很多個chunk，目的是僅載入必要的chunk，而不是載入整個Bundle。
                </p>

                <h2>Build Time and Runtime</h2>
                <p>
                    在build的時候，Next.js會轉換我們的code成production-optimize file(最佳化的檔案)，這些檔案會放在.next資料夾中，這些檔案會被部署到production server上，當使用者要求一個頁面的時候，Next.js會從.next資料夾中載入這個頁面，並且把它傳給使用者。
                </p>
                <p>這些檔案包含：</p>
                <ul>
                    <li>靜態頁面生成的HTML</li>
                    <li>於服務器端上渲染的JavaScript</li>
                    <li>於客戶端上互動的JavaScript</li>
                    <li>CSS</li>
                </ul>
                <p>Runtime指的是在build或deploy之後，應用程式響應用戶請求的時間。</p>

                <h2>Rendering</h2>
                <p>
                    在React中編譯的代碼轉換為HTML，這個行為稱為rendering。
                </p>
                <p>
                    Rendering可以在server-side或client-side上進行。可以在build的時候也可以在request的時候進行。
                </p>
                <p>在Next.js中，有三種rendering：</p>
                <ul>
                    <li>Server-Side Rendering (Pre-rendering)</li>
                    <li>Static Site Generation (Pre-rendering)</li>
                    <li>Client-Side Rendering (一般的React)</li>
                </ul>

                <p>我們先介紹一下其他觀念</p>
                <h3>Pre-rendering</h3>
                <p>
                    Server-side rendering和static site generation都是pre-rendering的一種，這意味著在request之前，HTML已經被生成了。
                </p>
                <h3>Client-side rendering VS Pre-rendering</h3>
                <p>
                    在一個標準流程中，瀏覽器從server接收html shell與建構UI的JavaScript指令，然後在client-side上渲染React應用程式。這個過程稱為client-side rendering。
                </p>
                <p>
                    相比之下，Next.js默認pre-rendering所有頁面，這意味著在request之前，HTML已經被生成了。所以用戶得到的Initial HTML是已經渲染好的，這樣可以讓頁面在載入的時候更快，且有助於SEO。
                </p>

                <Image src="/images/client-side-rendering.png" width={400} height={196} alt="" />
                <Image src="/images/pre-rendering.png" width={400} height={196} alt="" />


                <h3>那我們來比較一下兩個Pre-rendering</h3>
                <h4>Server-side rendering</h4>
                <p>
                    在每個request中，都會在Server上重新生成HTML、Json與JavaScript，這樣可以確保每個使用者都會看到最新的內容。
                </p>
                <p>在Client端上，HTML用於顯示non-interactable內容，而使用json數據和javascript來互動。(舉裡來說，把事件處理綁到按鈕上)，這個過程還稱之為hydration。</p>
                <p>Server-side rendering的優點是：</p>
                <ul>
                    <li>每個使用者都會看到最新的內容</li>
                    <li>可以使用SEO</li>
                </ul>
                <p>你可以使用getServerSideProps來實現Server-side rendering(選擇你想要用服務器端渲染的頁面)</p>
                
                <h4>Static site generation</h4>
                <p>
                    也是在Server生成的HTML，但不同的時候是在build的時候，而不是在request的時候。HTML會儲存在CDN中，讓每個request都可以快速的取得HTML。
                </p>


            </div>
        </Layout>
    );
};

export default Nextjs_Works;
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/layout";

// How Next.js Works
const NextjsWorks = () => {
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
                <p>在Next.js中，有四種rendering：</p>
                <ul>
                    <li>Client-Side Rendering (一般React的預設)</li>
                    <li>Server-Side Rendering (Pre-rendering) (Next.js的預設)</li>
                    <li>Static Site Generation (Pre-rendering)</li>
                    <li>Incremental Static Regeneration (Pre-rendering)</li>
                </ul>

                <p>這邊有一張圖片很好的說明了一切</p>
                <Image src="/images/rendering.jpg" width={800} height={800} alt="" />
                <a href="https://guydumais.digital/blog/next-js-the-ultimate-cheat-sheet-to-page-rendering/" rel="noopener" target="_blank">Sources: https://guydumais.digital/blog/next-js-the-ultimate-cheat-sheet-to-page-rendering/</a>
                <a href="https://www.makeuseof.com/nextjs-rendering-methods-csr-ssr-ssg-isr/" rel="noopener" target="_blank">Sources: https://www.makeuseof.com/nextjs-rendering-methods-csr-ssr-ssg-isr/</a>

                <p>Core Web Vitals (CWV) 是 Google 新頁面體驗排名因素的一部分，使用 3 種不同的背景顏色來識別，每種顏色都與對 CWV 的性能影響相關。紅色表示性能不佳，橙色表示性能良好，而綠色表示性能最佳。</p>

                <a href="https://next-page-rendering.vercel.app/" rel="noopener" target="_blank">別人寫的四個測試頁面(含程式碼)</a>

                <p>我們先介紹一個重要觀念</p>
                <h3>Pre-rendering</h3>
                <p>
                    Server-side rendering、static site generation和Incremental static regeneration都是一種 pre-rendering 技術，它們在 request 被發送到後端之前，已經生成了相應的 HTML 代碼，以供瀏覽器進行解析和渲染。
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


                <h3>那我們來比較一下三個Pre-rendering</h3>
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

                <p>Static site generation的優點是：</p>
                <ul>
                    <li>每個使用者都會看到最新的內容</li>
                    <li>可以使用SEO</li>
                    <li>每個request都可以快速的取得HTML</li>
                </ul>

                <p>你可以使用 getServerSideProps 來實現Static site generation(選擇你想要用靜態生成的頁面)</p>

                <h4>Incremental static regeneration</h4>
                <p>
                    這個方法是在Static site generation的基礎上，增加了一個background re-generation的功能。這個功能可以讓你的靜態網站在有新的內容時，可以自動的更新。
                </p>
                <p>
                    這是一種在不影響現有網站流量的情況下，可以隨時重新生成靜態資料的方法。在 ISR 中，當用戶首次訪問網站時，Next.js 會生成一份靜態 HTML 頁面，並在背景中重建該頁面的靜態資料。這意味著即使該頁面的資料已過時，在接下來的幾秒鐘內也可以快速地為該頁面返回最新數據。
                </p>

                <h2>流程步驟</h2>
                <p className="hightlight">CSR的流程步驟：</p>
                <p>當用戶請求網頁時，服務器端只會提供一個空的 HTML 頁面。</p>
                <p>瀏覽器下載 JavaScript 代碼，並從頭開始執行React應用程序。</p>
                <p>CSR的關鍵部分是 AJAX 請求。React向API發送請求，並使用返回的數據更新DOM。這通常發生在componentDidMount生命週期方法中。</p>
                <p>更新後的內容立即顯示在用戶的瀏覽器中。接下來，React應用程序的交互性和動態性都是由客戶端JavaScript代碼處理的。</p>

                <p>相比於SSR，CSR的優點是首次加載時較快，因為僅需下載一個簡單的HTML文件和JavaScript文件。但是，由於大部分內容都是由Ajax請求後再生成，所以CSR的SEO表現差於SSR。</p>

                <p className="hightlight">SSR的流程步驟：</p>
                <p>當用戶請求網頁時，Next.js 執行 getServerSideProps 方法。這個方法允許您在呈現頁面之前從伺服器端獲取數據。</p>
                <p>接著，Next.js 將從伺服器端提供靜態文件和編譯過的 React 組件。此時，瀏覽器可能會顯示一個空白頁面。</p>
                <p>在瀏覽器中，React 從已經下載的代碼中加載，並將其渲染到畫面上。</p>
                <p>客戶端的 React 和server端的 React 及其渲染完全不同。因此，當客戶端的 React 裝載後，需要重新創建 DOM，由於曾清除 server端 React 創建的DOM，所以重新渲染整個畫面</p>
                <p>如果用戶導航到其他頁面，Next.js 將重複此過程。</p>

                <p>在Server Side Rendering過程中,Next.js應用了React可重用組件的特性, 即使是初次請求，Next.js也能夠根據變化的路由參數，傳遞不同的數據到 getServerSideProps 函数中並渲染出不同內容。用戶端和服務器端都能夠呈現相同的畫面元素，且能提升網站的SEO表現。</p>

                <p className="hightlight">SSG的流程步驟：</p>
                <p>應用程序從頭到尾渲染每個頁面，並將其呈現為靜態HTML文件。</p>
                <p>當用戶訪問該頁面時，靜態HTML文件直接傳輸到瀏覽器中。</p>
                <p>從眾多靜態網頁中，選擇未變動的網頁進行缓存，通常使用CDN進行内容傳送,提高使用者訪問速度。</p>

                <p>SSG具有與CSR類似的優點，因為即使在初次加載時也能有效地提供更好的性能。同時，由於靜態網頁是SEO友好的，SSG 能夠為您的網站提供良好 SEO 表現,便于搜索引擎爬取您的網頁。另外，SSG還可以非常方便地進行幾乎實時的網站部署，不需要伺服器端執行React應用程序。</p>

                <p className="hightlight">ISR的流程步驟：</p>
                <p>ISR是一種在CSR和SSR之間的一種折衷方案，它的核心思想是在CSR的基礎上，將部分頁面內容進行預渲染，然後再進行客戶端渲染。</p>
                <p>在ISR中，首次請求時，會將部分頁面內容進行預渲染，然後再進行客戶端渲染。這樣做的好處是，可以在首次請求時就將部分頁面內容進行渲染，減少了客戶端渲染的時間，提高了首次請求的速度。</p>
                <p>但是，由於ISR是在CSR的基礎上進行的，所以在SEO方面的表現還是不如SSR。</p>

                <p className="hightlight">總結來說</p>
                <p>總的來說，CSR和SSR對於數據較多的網頁和動態體驗較為重要的網站適用，首次渲染速度較快但需要注意SEO問題；而SSG則適合內容變化不大、需要較好SEO表現或是在CDN等多個方面使用，首次載入速度比前者兩種方式均快。</p>

                <h2>補充</h2>
                <p>一般情況下 React 應用程式是在 client-side rendering (CSR) 的方式下工作。這種方式下，在客戶端上下載初始的 HTML shell 和 JavaScript 檔案，JavaScript檔案裡面包含了已經轉換成 JavaScript 代碼的 JSX，然後由瀏覽器內置的 JavaScript 引擎在客戶端上執行和解析這些 JS 代碼，生成動態的使用者介面。這種方式下需要等到頁面內容完成渲染才會顯示給用戶，因此速度較慢，對於 SEO 也不利。而在 server side rendering (SSR) 中，React 應用程式是在伺服器端渲染好 HTML 並返回給客戶端的方式下工作，所以用戶可以快速地看到初始的 HTML 內容，有助於提高首屏加載速度和 SEO。</p>


                <h1>換個說法</h1>
                <p>有四種方式可以在React中實現Render:</p>
                <p>1. Client Side Rendering (CSR)</p>
                <p>2. Server Side Rendering (SSR)</p>
                <p>3. Static Site Generation (SSG)</p>
                <p>4. Incremental Static Regeneration (ISR)</p>

                <p>我們將寫好的網頁上傳到伺服器後，要讓伺服器去進行build，這時候只有CSR的HTML會是空的，因為CSR是在瀏覽器上執行的，所以伺服器不會執行CSR的程式碼，像是SCSS、JSX、TSX等，所以CSR的HTML是空的，意思是在initial load的時候，CSR的HTML是空的，所以會看到一個空白的頁面，然後再透過JS去render出網頁內容。</p>
                <p>SSR、SSG和ISR在伺服器端build的時候都會執行完整的像是jsx、tsx、scss、html等檔案，所以它們能夠在伺服器端產生完整的HTML內容，並且將其返回給瀏覽器，瀏覽器就可以直接顯示網頁內容了。相較於CSR，SSR、SSG和ISR能夠更好地支援SEO，因為它們能夠產生完整的HTML內容，搜尋引擎就能夠更好地抓取網頁內容，提高網頁的排名。</p>
                <p>ISR 中，如果在初次渲染或之後的預渲染中檢測到需要使用 fetch API 獲取的數據，就會發出相應的請求，並使用這些數據重新生成 HTML。這些 HTML 通常會被緩存起來，以便在下一個請求時使用，從而提高性能。因此，ISR 可以使網站具有類似於 SSR 的性能和 SEO 優勢，同時又能享受 SSG 的性能優勢。</p>

                <p>伺服器端的build是提前生成靜態內容，所以是不會執行useEffect hook的喔</p>

                {/* 紀錄chatgpt回答 */}
                <p className="hightlight">要實現四種render方式，需要用到Next.js的一些函數</p>
                <p>
                    {/* 上述這四個 Next.js 的函數都跟渲染方式有關係，下面簡單說明一下它們的使用場景： */}

                    getInitialProps：可以讓一個頁面在服務器端進行渲染，並在渲染之前進行數據預取，這樣可以讓頁面的數據在第一時間就被填充上，特別適合用於 SEO。<br/>
                    getServerSideProps：每當有一個頁面請求時，Next.js 會使用 getServerSideProps 函數返回的數據在服務器端進行渲染，這樣可以實現 SSR（Server-Side Rendering），特別適合於需要經常更新的數據頁面。<br/>
                    getStaticPaths：如果你的頁面使用了動態路由，那麼可以使用 getStaticPaths 函數來提前靜態生成所有動態路由的頁面，這樣可以實現 SSG（Static Site Generation）。<br/>
                    getStaticProps：如果一個頁面的數據在編譯時期就可以確定，那麼可以使用 getStaticProps 函數來實現在編譯時期預渲染頁面。<br/>
                    總結來說：<br/>

                    getInitialProps 和 getServerSideProps 都可以實現 SSR，但是 getInitialProps 已經被標記為過時，推薦使用 getServerSideProps。<br/>
                    getStaticPaths 和 getStaticProps 都是用於實現 SSG 和 ISR 的函數，其中 getStaticPaths 是用於生成動態路由的頁面，而 getStaticProps 則是用於在編譯時期預渲染頁面。
                </p>

                <p className="hightlight">補充</p>
                <p>
                    getInitialProps 和 getServerSideProps 都可以實現服務器端渲染(SSR)。
                    在 Next.js 的早期版本中，getInitialProps 被用來從服務器獲取數據，然後將其傳遞給頁面組件進行渲染。
                    而現在，Next.js 官方推薦使用 getServerSideProps 來實現服務器端渲染。
                    getServerSideProps 功能和 getInitialProps 類似，但是有一些不同之處。其中最大的不同是，getServerSideProps 只能用於頁面組件上，而 getInitialProps 可以用於頁面組件和其他組件。另外，getInitialProps 在未來的版本中可能會被刪除，因此現在使用 getServerSideProps 是一個更好的選擇。
                </p>

                <h3>總結</h3>
                <p>
                    CSR（Client-Side Rendering）是在瀏覽器上執行的，通常使用React框架的話，可以使用React的生命周期方法componentDidMount來在客戶端渲染頁面。而在Next.js中，CSR通常不需要使用特殊的函數。
                    ISR（Incremental Static Regeneration）是在Next.js中實現SSG時的一個功能，可以在不重新構建整個站點的情況下，只重新生成有變化的頁面。通常使用getStaticProps函數來進行數據獲取和生成靜態頁面，並且通過設置revalidate參數來指定頁面的重新生成間隔時間。
                    簡單來說，如果需要在瀏覽器上渲染頁面，使用CSR；如果需要在服務器上渲染頁面，使用SSR或SSG；如果需要在不重新構建整個站點的情況下更新部分頁面，使用ISR。
                </p>


                {/* 
                事實是 Next.js 預設是做服務器端渲染 (Server-Side Rendering, SSR)。
                如果一個頁面沒有使用 getServerSideProps 或 getStaticProps 函數，那麼它仍然會在服務器端被渲染，並將 HTML/CSS/JavaScript 代碼傳送到客戶端進行互動。
                因此，它不是客戶端渲染 (Client-Side Rendering, CSR)。
                但是，如果使用了 getServerSideProps 或 getStaticProps 函數，那麼頁面就可以進一步實現靜態網頁生成 (Static Site Generation, SSG) 或中間狀態渲染 (Incremental Static Regeneration, ISR)。
                所以你可以把它想象成一個連續的漸進式增強 (Progressive Enhancement) 的過程：從 SSR 到 SSG 或 ISR。
                 */}

            </div>
        </Layout>
    );
};

export default NextjsWorks;
import Head from 'next/head'
import Layout from '../components/layout'
import { CommonPrism } from '../components/Common'
import Link from 'next/link'
function NextjsAPI() {
    return (
        <Layout>
            <Head>
                <title>Next.js中的API</title>
            </Head>
            <h1>Next.js中的API</h1>
            <p>Next.js提供很多API，包含我們前面學的next/image與next/link，那還有很多像是next/router、next/head等等。並且也提供你自己寫API的功能。</p>

            <h1>介紹如何在Next.js中自己寫Api並且使用</h1>
            <p>
                在Next.js中，你可以在pages資料夾中建立一個api資料夾，並且在裡面建立一個js檔案，這個檔案就是你的API，你可以在裡面寫一些功能，並且在前端使用。<br />
                而且這些檔案都不會被當成一個頁面，所以不會被編譯成html檔案。 <br />
                它們是伺服器端的bundles，也不會增加客戶端的bundle大小。
            </p>
            <p>直接舉個例子：</p>
            <CommonPrism>
                {`// This is an example of an API route.
// pages/api/user.js
export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}`}
            </CommonPrism>
            <p>上面我們在pages/api資料夾中建立了一個user.js檔案，並且在裡面寫了一個handler，這個handler會回傳一個json格式的資料。</p>
            <p>當我們開啟網頁的時候就會自動有一個路徑是/api/user，這個路徑就是我們剛剛建立的API。<br />
                所以你輸入localhost:3000/api/user就會看到我們剛剛回傳的json資料。
                <Link href="/api/user">api/user</Link>
            </p>

            <p className='hightlight'>解釋</p>
            <p>為了讓Api有效果，我們必須寫上默認的export default function handler(req, res) { }，這個handler會接收兩個參數，req是request，res是response。</p>
            <p>在這個handler裡面，我們可以使用req來取得前端傳過來的資料，並且使用res來回傳資料。</p>
            <p>req 是 http.IncomingMessage 的實例，這個物件包含了請求的資訊，例如：url、method、headers等等。</p>
            <p>res 是 http.ServerResponse 的實例，這個物件包含了回應的資訊，例如：status、setHeader、write、end等等。</p>

            <p>例如post請求，我們可以這樣寫：</p>
            <CommonPrism>
                {`// This is an example of an API route.
// pages/api/user.js
export default function handler(req, res) {
    if (req.method === 'POST') {
        // Process a POST request
    } else {
        // Handle any other HTTP method
    }
}`}
            </CommonPrism>

            <p className='hightlight'>注意</p>
            <p>API Routes預設是沒有CORS(跨來源資源共用)的，意味著只有相同的網域才能發送請求給這個API route。</p>
            <p>如果要讓其他不同網域的網頁也可以藉由 AJAX 發送請求，就得自行加入 CORS 相關的 headers。(待驗證)</p>
            <a href="https://github.com/vercel/next.js/tree/canary/examples/api-routes-cors">官方做法連結</a>
            
            {/* <p>例如：</p>
            <CommonPrism>
                {`// This is an example of an API route.
// pages/api/user.js
export default function handler(req, res) {
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
}`}
            </CommonPrism> */}

            <h1>next/router</h1>

            <h1>next/head</h1>



        </Layout>
    )
}

export default NextjsAPI
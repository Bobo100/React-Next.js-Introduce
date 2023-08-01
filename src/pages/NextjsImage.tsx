import Head from 'next/head'
import { CommonPrism } from '../components/Common'
import LocalImage from '../components/image-nextjs/localImage'
import RemoteImage from '../components/image-nextjs/remoteImage'
import Layout from '../components/layout'
import Image from 'next/image'
function NextjsImage() {
    return (
        <Layout>
            <Head>
                <title>Next.js中的圖片</title>
            </Head>
            <h1>Next.js中的圖片</h1>
            <p>在Next.js中，我們可以使用Image元件來顯示圖片。</p>
            <p>這個Image元件是在next/image中，是從html的img元件中來的，並且在html的img元件的基礎上做了一些改變。</p>
            <p>它提供了各種內建的功能，例如：自動圖片大小調整、自動圖片格式轉換、自動圖片優化等等。還可以幫助我們提高網站的SEO。</p>
            <ul>
                <li>改進的性能：總是為每個設備提供正確大小的圖片，使用現代圖像格式</li>
                <li>視覺穩定性：自動防止累積佈局偏移</li>
                <li>更快的頁面加載：圖片只有在進入視口時才加載，並可選擇模糊上升的占位符</li>
                <li>資產靈活性：按需調整圖片大小，即使是存儲在遠程服務器上的圖片也可以</li>
            </ul>

            <h2>使用方式有兩種</h2>

            <p className='hightlight'>第一種方式：Remote Image</p>
            <p>{`<Image src="/images/profile.jpg" alt="Picture of the author" width={500} height={500} />`}</p>
            <p>Image元件的src屬性可以是一個路徑，也可以是一個base64編碼的圖片。這種方式的情況下一定要指定width和height屬性。</p>
            <p>Image元件的width屬性和height屬性可以是一個數字，也可以是一個字串。</p>

            <h2>Example</h2>
            <CommonPrism>
                {`import Image from 'next/image'

function NextjsImage() {
    return (
        <Image
            src="/images/profile.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
        />
    )
}

export default NextjsImage

// 或是

function NextjsImage() {
    return (
        <Image
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEU
            gAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1B
            AACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABFSURBVDhP
            Y2AYBQAAADAA1T3Q0AAAAABJRU5ErkJggg=="
            alt="Picture of the author"
            width={500}
            height={500}
        />
    )
}

export default NextjsImage`}
            </CommonPrism>

            <RemoteImage />

            <p>特別要注意的是src如果使用的是本地端的圖片，那就必須在public資料夾下，無法在其他資料夾下。</p>
            <p>如果使用的是base64編碼的圖片，那就必須是data:image/png;base64開頭的。</p>

            <p className='hightlight'>第二種方式：Local Image</p>
            <CommonPrism>
                {`import Image from 'next/image'
import profilePic from '../public/images/profile.jpg'

function NextjsImage() {
    return (
        <Image
            src={profilePic}
            alt="Picture of the author"
            width={500}
            height={500}
        />
    )
}

export default NextjsImage`}
            </CommonPrism>

            <LocalImage />

            <h2>請注意：</h2>
            {/* Dynamic await import() or require() are not supported. The import must be static so it can be analyzed at build time. */}
            <p>不支援動態的await import()或require()。import必須是靜態的，這樣才能在建構時分析。</p>
            <p>Image元件的src屬性必須是靜態資源，不能是動態資源。</p>
            {/* <p>如果你想要使用動態資源，那就必須使用Image元件的loader屬性。</p> */}

            <p>另外，style的使用上也有幾點要注意的地方。</p>
            <p><span>不能使用style-jsx</span>，但可以使用style-global。</p>

            <p>當你使用了fill這個屬性時，parent請給予position: relative與display: block。</p>

            <h2>讓Image可以在build的時候預先載入</h2>
            <Image src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="Picture of the author" width={500} height={500} />    
        </Layout>
    )
}

export default NextjsImage
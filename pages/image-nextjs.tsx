import Head from 'next/head'
import Image from 'next/image'
import { CommonPrism } from '../components/Common'
import Layout from '../components/layout'
function ImageInNextJs() {
    return (
        <Layout>
            <Head>
                <title>Next.js中的圖片</title>
            </Head>
            <h1>Next.js中的圖片</h1>
            <p>在Next.js中，我們可以使用Image元件來顯示圖片。</p>
            <p>Image元件的src屬性可以是一個路徑，也可以是一個base64編碼的圖片。</p>
            <p>Image元件的width屬性和height屬性可以是一個數字，也可以是一個字串。</p>

            <h2>Example</h2>
            <CommonPrism>
                {`import Image from 'next/image'

function ImageInNextJs() {
    return (
        <Image
            src="/images/profile.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
        />
    )
}

export default ImageInNextJs

// 或是

function ImageInNextJs() {
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

export default ImageInNextJs
                `}
            </CommonPrism>

            <p className='hightlight'>特別要注意的是src如果使用的是本地端的圖片，那就必須在public資料夾下，無法在其他資料夾下。</p>
            <p className='hightlight'>如果使用的是base64編碼的圖片，那就必須是data:image/png;base64開頭的。</p>

        </Layout>
    )
}

export default ImageInNextJs
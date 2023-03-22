import Head from "next/head";
import { CommonPrism } from "../components/Common";
import Layout from "../components/layout";
import styles from "../styles/styles.module.scss";
const NextStyles = () => {
    return (
        <Layout>
            <Head>
                <title>Next.js中的樣式</title>
            </Head>
            <h1>Next.js中的樣式</h1>
            <p>Next.js中的樣式有兩種方式：</p>
            <ul>
                <li>使用CSS-in-JS</li>
                <li>使用CSS Modules</li>
            </ul>
            <h2>CSS-in-JS</h2>
            <p>使用CSS-in-JS的方式，可以讓我們在React中使用CSS，而不需要使用外部的CSS檔案。</p>
            <p>使用方式如下：</p>
            <CommonPrism>
                {`function HiThere() {
  return <p style={{ color: 'red' }}>hi there</p>
}

export default HiThere`}
            </CommonPrism>
            <p>在這個例子中，我們使用了一個style屬性，並且使用了一個物件，裡面有一個color屬性，值為red。</p>

            <h2>CSS Modules</h2>
            <p>就像以前你使用css的方式，我們需要在styles資料夾中建立一個css檔案，並且在這個檔案中撰寫CSS。(也可以是scss、sass、less)，因為我們有在next.config.js中設定了sass的支援。</p>
            <p>如果你沒有設定過，請你檢查：next.config.js</p>
            <CommonPrism>
                {`// Path: next.config.js
const path = require('path')

module.exports = {
    sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    },
}`}
            </CommonPrism>
            <p>並且確保你有安裝sass。</p>
            <CommonPrism>
                {`npm install --save-dev sass`}
            </CommonPrism>
            <p>這樣就能使用sass或scss了。</p>
            <p className="hightlight">請注意：命名一定要是 XXX名稱.module.css，這樣才會被認為是CSS Modules。</p>

            <h3>模組化的好處</h3>
            <p>模組化的好處是，你可以在不同的檔案中使用相同的class名稱，而不會互相影響。</p>

            <p>在這個例子中，我們建立一個styles資料夾，並且在裡面建立一個styles.module.scss檔案，並且在裡面撰寫CSS。</p>
            <CommonPrism>
                {`// Path: styles/styles.module.scss
$color: red;
.text_color {
    color: $color;
}`}
            </CommonPrism>
            <p>接著我們在pages資料夾中建立一個styles-nextjs.tsx檔案，並且在裡面撰寫程式碼。</p>
            <CommonPrism>
                {`// Path: pages/styles-nextjs.tsx
import styles from "../styles/styles.module.scss";
<div>
    <p className={styles.text_color}>這是一個使用CSS Modules的例子</p>
</div>`}
            </CommonPrism>

            <div>
                <p className={styles.text_color}>這是一個使用CSS Modules的例子</p>
            </div>

            <h4>不一樣的地方</h4>
            <p>你可能會想說，那我們以前使用scss或是css的方法能不能用，例如：</p>
            <CommonPrism>
                {`<div>
    <p className="text_color">以前我們都這樣使用，但在Next.js中不行</p>
</div>`}
            </CommonPrism>
            <p>另外你不能在其他module.scss/css中使用元素選擇器，例如：</p>
            <CommonPrism>
                {`// Path: styles/styles.module.scss
// 會報錯 Syntax error: Selector "div" is not pure (pure selectors must contain at least one local class or id) 
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}`}
            </CommonPrism>
            <p>意思是說，你不能在styles.module.scss/css中使用元素選擇器，例如：div、ul、li、p等等。你的選擇器至少要包含一個class或是id。</p>
            <p>如果你想要使用元素選擇器，則必須在global.scss/css中使用，做法如下：</p>
            <CommonPrism>
                {`// Path: styles/global.scss // 名稱你可以自己取啦
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}`}
            </CommonPrism>
            <p>之後在pages下資料夾中的_app.tsx檔案中引入global.scss/css，如下：</p>
            <CommonPrism>
                {`// Path: pages/_app.tsx
import '../styles/global.scss';`}
            </CommonPrism>
            <p>這樣你的元素選擇器就可以使用了。</p>
        </Layout>

    );
};

export default NextStyles;
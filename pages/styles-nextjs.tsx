import Head from "next/head";
import { CommonPrism } from "../components/Common";
import CSSinJS from "../components/styles-nextjs/CSSinJS";
import CssinJs3 from "../components//styles-nextjs/CSSinJS-styled-component";
import CSSinJS2 from "../components/styles-nextjs/CSSinJS2";
import Layout from "../components/layout";
import StyleOrder from "../components/styles-nextjs/style_order";
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

      <p>當然，我們也可以將這些屬性放到一個檔案去管理</p>
      <h3>Example 1</h3>
      <CommonPrism>
        {`// variables.ts
export const colors = {
primary: '#007bff',
secondary: '#6c757d',
success: '#28a745',
warning: '#ffc107',
danger: '#dc3545',
info: '#17a2b8',
};

export const spacing = {
small: '8px',
medium: '16px',
large: '24px',
};`}
      </CommonPrism>
      <CommonPrism>
        {`// CSSinJS.tsx
import React from 'react';
import { colors, spacing } from './variables';

const CSSinJS = () => {
  const styles = {
    backgroundColor: colors.primary,
    padding: spacing.medium,
  };

  return (
    <div style={styles}>
      <h1>Hello World</h1>
    </div>
  );
};

export default CSSinJS;
`}
      </CommonPrism>
      <p>這樣就可以使用CSS-in-JS了。</p>
      <CSSinJS />

      <h3>Example 2</h3>
      <CommonPrism>
        {`function CSSinJS2() {
    return (
        <div>
            Hello world
            <p>scoped!</p>
            <style jsx>{\`
          p {
            color: blue;
          }
          div {
            background: red;
          }
          @media (max-width: 600px) {
            div {
              background: blue;
            }
          }
        \`}</style>
            <style global jsx>{\`
          body {
            background: black;
          }
        \`}</style>
        </div>
    )
}

export default CSSinJS2
            
            `}
      </CommonPrism>
      <CSSinJS2 />

      <p>這是一個使用了 Next.js 的 JSX 語法，其中包含了兩個 {`<style>`} 標籤，分別使用了不同的屬性：jsx 和 global jsx。這兩個屬性都是 Next.js 中專門為 CSS-in-JS 設計的屬性。</p>
      <p>在這個例子中，第一個 {`<style>`} 標籤使用了 jsx 屬性，這表示其中的 CSS 是組件內部的，只在該組件內部有效。其中定義了 p 元素的文字顏色為藍色，div 元素的背景顏色為紅色，並且在螢幕寬度小於 600 像素時，將 div 元素的背景顏色改為藍色。</p>
      <p>第二個 {`<style>`} 標籤使用了 global jsx 屬性，這表示其中的 CSS 是全局的，將影響整個應用程式。其中定義了 body 元素的背景顏色為黑色。</p>

      <h3>Example 3</h3>
      <CssinJs3 />



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

      <h2>最後我們可以看一下優先順序</h2>
      <p>優先順序如下：</p>
      <p>1. <span>Inline CSS</span>：在 HTML 標籤內使用 style 屬性指定的 CSS 規則，具有最高的優先級，會覆蓋其他儲存位置定義的相同屬性。權重為1000</p>
      <p>2. <span>CSS in JS</span>: 在 JavaScript 中使用特定函式庫創建的 CSS ，如 styled-components、emotion 等模組。其優先順序比 CSS 模塊更高。</p>
      <p>3. CSS 模塊<span>（SCSS module）</span>： 使用 CSS 預處理器創建的模塊化 CSS 文件。其優先順序比普通的 CSS 文件更高。</p>
      <p>4. CSS 檔案中的 id 類型選擇器：使用 id 類型選擇器定義的 CSS 規則。權重為100 </p>
      <p>5. CSS 檔案中的 class 類型選擇器或偽類選擇器：使用 class 類型選擇器或偽類選擇器定義的 CSS 規則。權重為10</p>
      <p>6. CSS 檔案中的元素選擇器或偽元素選擇器：使用元素選擇器或偽元素選擇器定義的 CSS 規則。權重為1，例如：div、ul、li、p等等。</p>

      <StyleOrder />

    </Layout >

  );
};

export default NextStyles;
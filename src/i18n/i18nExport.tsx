const config = {
  locale: ['en-us', 'zh-tw'],
};

// 產生所有語系的 slug
const generateLocaleSlugs = () => {
  return config.locale.map((locale) => {
    return {
      params: {
        locale,
      },
    };
  });
};

// 產生所有語系的 getStaticPaths
async function getStaticPaths() {
  // paths 這個參數將會決定 dynamic routes 有哪些頁面將會產生 HTML 檔案
  // 所以我們就會有結尾是 en-us, zh-tw, ja, de, fr, es, pt, it 的 HTML 檔案
  return {
    paths: generateLocaleSlugs(),
    fallback: false,
  };
}

// 產生所有語系的 getStaticProps
async function getStaticProps({ params }) {
  console.log('params', params);
  return {
    props: {
      ...params,
      time: new Date().getTime(),
    },
  };
}

export { getStaticPaths, getStaticProps };

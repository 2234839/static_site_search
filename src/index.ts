import lunr from "lunr";
var idx = lunr(function () {
  this.field("title");
  this.field("body");

  this.add({
    title: "Twelfth-Night",
    body: "If music be the food of love, play on: Give me excess of it…",
    id: "1"
  });
  this.add({
    title: "Twelfth-Night",
    body: `{: id="20210409175707-ia4w1qe"}

    | 方案名                                          | 评价                                                                                              |
    | ------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
    | [卡拉搜索](https://kalasearch.cn/)              | 看起来貌似很不错，不过到现在为止（2021/1/22）还只是面向企业                                       |
    | [algolia](https://www.algolia.com)              | 体验也不错，vue.js tailwind 都在用，上手成本小高                                                  |
    | [sitesearch360](https://www.sitesearch360.com/) | ❤使用起来非常简单，容易上手而且效果也不错。<br />免费版 150 个的页面限制，每月 1000 的搜索量限制 |
    {: id="20210409175707-al20uec" updated="20210409170029"}
    
    {: id="20210409175707-ld6f8v7"}
    
    - {: id="20210409175707-44q0up6"}[站内搜索解决方案有哪些?怎么选 | 卡拉搜索 (kalasearch.cn)](https://kalasearch.cn/blog/site-search-solutions/)
      {: id="20210409175707-6jcgjkg"}
    {: id="20210409175707-8r5mbb8" updated="20210409170612"}
    
    - {: id="20210409175707-znwqno6"}html -> text -> 分词集合->({站内:1,站内搜索:1})
      {: id="20210409175707-72w1j0r" updated="20210409173101"}
    {: id="20210409175707-mtadue1" updated="20210409172942"}`,
    id: "1"
  });
});

document.getElementById("app")!.innerHTML = JSON.stringify(idx);

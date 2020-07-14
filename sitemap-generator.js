const fs = require("fs");
const fetch = require("node-fetch");
const prettier = require("prettier");

const getDate = new Date().toISOString();
const DOMAIN = 'https://ulmaya.zikto.com/'

const formatted = sitemap => prettier.format(sitemap, { parser: "html" });

(async () => {
  const res = await fetch(`https://howmuch.zikto.com/api/web/trend/itemList`)
  const items = await res.json();


  const staticPages = ['']
  // const postList = [];
  // fetchPosts.forEach(post => postList.push(post.id));

  const itemListSitemap = `
    ${items.data
      .map(item => {
        return `
          <url>
            <loc>${DOMAIN}itemTrendDetail/${item.name.split(' ').join('-')}/</loc>
            <lastmod>${getDate}</lastmod>
          </url>`;
      })
      .join("")}
  `;

  const staticSiteMap = `
    ${staticPages
      .map(item => {
        return `
          <url>
            <loc>${DOMAIN}${item}</loc>
            <lastmod>${getDate}</lastmod>
          </url>`;
      })
      .join("")}
`;



  const generatedSitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
    >
      ${staticSiteMap}
      ${itemListSitemap}
    </urlset>
  `;

  const formattedSitemap = [formatted(generatedSitemap)];

  fs.writeFileSync("./public/sitemap-posts.xml", formattedSitemap, "utf8");
})();
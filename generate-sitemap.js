const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

const getDynamicRoutes = async () => {
  return [
    '/#/blog/hack-for-commenting-out-code',
    '/#/blog/new-website-and-blog-features-nr-8',
    '/#/blog/50-things-before-i-die',
    '/#/blog/how-to-make-legacy-code-even-worse',
    '/#/blog/sleep-with-promises',
    '/#/blog/deleting-email-after-sending-it',
    '/#/blog/thoughts-on-googles-api-based-os',
    '/#/blog/resolving-no-upstream-branch-error',
    '/#/blog/demystifying-git-staging',
    '/#/blog/i-was-wrong-about-switch-cases',
    '/#/blog/google-sheets-as-a-free-database',
    '/#/blog/15-unpopular-opinions',
    '/#/blog/new-website-and-blog-features-nr-7',
    '/#/blog/reflection-on-work-and-survival',
    '/#/blog/new-blog-features-nr-6',
    '/#/blog/new-blog-features-nr-5',
    '/#/blog/introducing-tugs',
    '/#/blog/new-blog-features-nr-4',
    '/#/blog/discovering-slowmo-in-playwright',
    '/#/blog/new-blog-features-nr-3',
    '/#/blog/salary-transparency-in-tech',
    '/#/blog/new-blog-features-nr-2',
    '/#/blog/migrating-to-postgresql',
    '/#/blog/making-a-game-engine',
    '/#/blog/support-for-ui-buttons',
    '/#/blog/new-blog-features-nr-1',
    '/#/blog/my-first-blog-post-(again)',
  ];
};

const generateSitemap = async () => {
  const dynamicRoutes = await getDynamicRoutes();

  const sitemapStream = new SitemapStream({ hostname: 'https://isakhorvath.me' });

  sitemapStream.write({ url: '/#/', changefreq: 'daily', priority: 1.0 });
  sitemapStream.write({ url: '/#/blog', changefreq: 'weekly', priority: 0.8 });
  sitemapStream.write({ url: '/#/about', changefreq: 'monthly', priority: 0.8 });

  dynamicRoutes.forEach(route => {
    sitemapStream.write({ url: route, changefreq: 'weekly', priority: 0.7 });
  });

  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream).then(sm => sm.toString());

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);

  console.log('Sitemap generated successfully!');
};

generateSitemap().catch(console.error);

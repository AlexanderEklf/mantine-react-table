/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.mantine-react-table.com',
  generateRobotsTxt: true,
  changefreq: null,
  priority: null,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/data', '/_next', '/proxy'],
      },
    ],
  },
};

module.exports = config;

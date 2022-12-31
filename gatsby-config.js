module.exports = {
  siteMetadata: {
    title: '2023 金融資安研習營',
    description:
      '2023 金融資安研習營 Financial Information & Security Workshop 為協助大學財金、資工、資管及資訊類相關背景學生對於金融產業的認識及瞭解資安的實務運用，藉由整合產業的力量，舉辦此研習營以協助學生能夠於在校期間認識金融資安的工作，同時建立產業與學界共同合作的機制。',
    siteUrl: 'https://fisw.ccisa.org.tw',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `news`,
        path: `${__dirname}/news`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: `${__dirname}/src/assets/`,
      },
    },
  ],
};

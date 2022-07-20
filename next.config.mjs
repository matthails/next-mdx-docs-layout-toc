import remarkToc from 'remark-toc';
import remarkSlug from 'remark-slug'

export default {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: {
            providerImportSource: '@mdx-js/react',
            remarkPlugins: [remarkToc, remarkSlug],
            rehypePlugins: [],
          },
        },
      ],
    });
 
    return config;
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
};

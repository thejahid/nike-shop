import React from "react";
import Head from "next/head";

interface SEOProps {
  title: string;
  description?: string;
  image?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = "Nike",
  description = "A full stack react app using [ typescript, node, apollo graphql, mongodb, express, react ]",
  image,
  keywords = "Jamstack, Ecommerce, Website, Headless, Gatsby, Next, Shopify",
}) => {
  return (
    <Head>
      <title>{title} | Jamstack Ecommerce Solutions</title>
      <html lang="en" />
      <meta name="image" content={image} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

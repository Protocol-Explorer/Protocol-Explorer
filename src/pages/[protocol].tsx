// pages/[protocol].tsx

import { GetStaticPaths, GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import dynamic from 'next/dynamic';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import Navbar from '@/components/Navbar';
import TelegramCall from '@/components/TelegramCall';
import Layout from '@/components/Layout';
import { useMDXComponents } from "../../mdx-components"

// Dynamically import MDX components
// const Navbar = dynamic(() => import('@/components/Navbar'));

// If you have other components to include, import them similarly

const components = { Navbar }; // Add other components to this object

const ProtocolPage = ({ mdxSource, frontMatter }) => {
  const MDXComponents = useMDXComponents(components)
  console.log({ frontMatter })
  return (
    <>
      <TelegramCall />
      <Navbar /> {/* Use the Navbar or any other components as needed */}
      <Layout protocol={...frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
      </Layout>
    </>
  );
};

export default ProtocolPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('src', 'protocols'));

  const paths = files.map((fileName) => ({
    params: {
      protocol: fileName.replace(/\.mdx$/, ''),
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const protocol = params?.protocol;

  if (typeof protocol !== 'string') {
    return { notFound: true };
  }

  const filePath = path.join('src', 'protocols', `${protocol}.mdx`);
  const markdownWithMeta = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(markdownWithMeta);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: frontMatter,
  });

  return {
    props: {
      mdxSource,
      frontMatter,
    },
  };
};

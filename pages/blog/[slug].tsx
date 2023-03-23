import fs from "fs"
import { GetStaticPropsContext, InferGetStaticPropsType } from "next"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import H1 from "@/components/mdx/H1"
import HeroImage from "@/components/mdx/HeroImage"
import React from "react"
import P from "@/components/mdx/P"
import H2 from "@/components/mdx/H2"

const components = {
  h1: H1,
  h2: H2,
  p: P,
  HeroImage,
}
export default function PostPage({ source }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>{source.frontmatter.title as string}</title>
      </Head>
      <MDXRemote {...source} components={components} />
    </div>
  )
}
export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" }
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string
  }>,
) {
  const { slug } = ctx.params!

  const postFile = fs.readFileSync(`_posts\\${slug}.mdx`)

  const mdxSource = await serialize(postFile, { parseFrontmatter: true })
  return {
    props: {
      source: mdxSource,
    },
  }
}

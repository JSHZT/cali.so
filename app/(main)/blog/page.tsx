import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'


import { Container } from '~/components/ui/Container'
import { SocialLink } from '~/components/links/SocialLink'

import { BlogPosts } from './BlogPosts'

const description =
  '通过写博客，记录遇到和解决的各种问题，以此沉淀技术。同时也会发布其他非技术类的文章。'
export const metadata = {
  title: '我的博客',
  description,
  openGraph: {
    title: '我的博客',
    description,
  },
  twitter: {
    title: '我的博客',
    description,
    card: 'summary_large_image',
  },
}

// TODO: add pagination or infinite scroll
export default function BlogPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          JSHZT‘s blog
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
        <div className="max-w-2xl">
          <motion.div
          className="mt-6 flex gap-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            damping: 50,
            stiffness: 90,
            duration: 0.35,
            delay: 0.25,
          }}
        >
          <SocialLink
            href="https://github.com/JSHZT"
            aria-label="我的 GitHub"
            platform="github"
          />
          <SocialLink
            href="mailto:hzt3016@gmail.com"
            aria-label="我的邮箱"
            platform="mail"
          />
        </motion.div>
        </div>
      </header>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-20 lg:grid-cols-2 lg:gap-8">
        <BlogPosts limit={20} />
      </div>
    </Container>
  )
}

export const revalidate = 60

import Image from 'next/image'
import Balancer from 'react-wrap-balancer'

import { Container } from '~/components/ui/Container'

import AlipayQR from './alipay-qr.jpg'


const title = 'Ask Me Anything'
const description =
  'JSHZT 乐意接受咨询（Ask Me Anything），并且提供外包服务。'

export const metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
  },
}

export default function AskMeAnythingPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ask Me Anything
        </h1>
        <p className="my-6 text-base text-zinc-600 dark:text-zinc-400">
          <Balancer>{description}</Balancer>
        </p>
      </header>

      <article className="prose dark:prose-invert">
        <h2>咨询内容</h2>
        <p>我可以为你解答以下相关的问题：</p>
        <ul>
          <li>
            <b>保研/考研经验</b>
            ：保研道阻且长？不知道如何规划？需要知道什么技巧？考研需要怎么准备？
          </li>
          <li>
            <b>编程技术</b>：不知道如何开始学习编程？写不动代码？迫切想提高代码能力？
          </li>
          <li>
            <b>生活方面</b>
            ：运动、恋爱和摄影等
          </li>
        </ul>
        
        <h2>外包服务</h2>
        <p>技术栈：</p>
        <ul>
          <li>
            <b>全栈开发</b>
            ：具有几年的工作经验，更偏向于后台多一些，我做过go、java、python等不同语言的后台岗位。
          </li>
          <li>
            <b>人工智能</b>：有过几年的工作经验，计算机视觉、自然语言处理的各个领域都有涉猎，例如数字人等，目前主要深入研究多模态大模型，当然计算机视觉的很多下游任务我都做过。
          </li>
          <li>
            <b>数据服务</b>
            ：数据爬取、数据标注等工作。
          </li>
        </ul>
        <p>可以直接邮箱联系我描述需求，价格我会根据需求酌情报出：</p>

        <h2>请我喝咖啡</h2>
        <p>不论你想咨询什么，请我喝杯9.9的咖啡吧！</p>
        <p className="flex justify-center md:block md:justify-start">
          <span className="inline-flex flex-col items-center">
            <Image src={AlipayQR} alt="" className="w-44 dark:brightness-90" />
            <span className="mt-1 text-sm font-medium">扶贫二维码</span>
          </span>
        </p>
        <p>
          一旦你完成支付，通过我的邮箱联系我！
        </p>
      </article>
    </Container>
  )
}

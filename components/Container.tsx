import Head from 'next/head';
import metadata from '../data/metadata';
import Nav from './Nav';
import Link from "next/link";
import Image from 'next/image';

const Container = (props) => {
    const meta = {
        title: metadata.title,
        description: metadata.description,
        author: metadata.author,
        ...props.customMeta,
      };

    return (
        <div className={`w-full flex flex-col items-center p-3`}>
            <Head>
              <title>{meta.title}</title>
              <meta content={meta.description} name="description" />
              <meta property="og:site_name" content={meta.author} />
            </Head>
            {/*  max-w-3xl */}
            <header className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}>
                <div className={`flex flex-row items-center`}>
                    {/* 이미지로고 영역 */}
                <Link href="/">
                  <Image
                     src={`/123.jpg`}
                     alt="로고"
                     width={40}
                     height={40}
                     objectFit={`cover`}
                     className={`rounded-full cursor-pointer`}
                   /> 
                </Link>
                <Link href="/">
                  <span className={`cursor-pointer mx-2 font-extralight text-lg`}>
                    {metadata.title}
                  </span>
                </Link>
                </div>
                <Nav/>
            </header>
            <main  className={`w-full max-w-3xl`}>{props.children}</main>
        </div>
    )
}

export default Container;
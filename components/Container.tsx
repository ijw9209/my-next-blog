import Head from 'next/head';
import metadata from '../data/metadata';
import Nav from './Nav';
import Link from "next/link";
import Image from 'next/image';
import beach from '../public/images/beach1920.jpg';

const Container = (props) => {
    const meta = {
        title: metadata.title,
        description: metadata.description,
        author: metadata.author,
        ...props.customMeta,
      };

    return (
        // p-3
        <div className={`w-full flex flex-col items-center`}>
            <Head>
              <title>{meta.title}</title>
              <meta content={meta.description} name="description" />
              <meta property="og:site_name" content={meta.author} />
            </Head>
            <div className={`bg-[url('/images/beach1920.jpg')] w-full h-96 `}>
              {/* <Image 
              src={`/images/beach1920.jpg`}
              alt="beach"
              width={800}
              height={500}
              objectFit={`cover`}
              className={`w-full`}
              layout={`intrinsic`}
               /> */}
            {/*  max-w-3xl */}
            <header className={`flex flex-row justify-between items-center my-1 max-w-3xl p-3 m-auto `}>
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
                  <span className={`cursor-pointer mx-2 text-lg text-white font-medium	`}>
                    {metadata.title}
                  </span>
                </Link>
                </div>
                <Nav/>
            </header>
            <div className={` flex-row justify-between items-center my-1 max-w-3xl mt-12 p-3 m-auto`}>
              <Image
                     src={`/images/icons8-computer-96.png`}
                     alt="로고"
                     width={96}
                     height={96}
                     className={``}
              /> 
              <p className={`text-5xl font-medium text-white`}>{metadata.mainTitle}</p>
              <p className={`text-1xl font-medium text-white mt-6`}>{metadata.mainDescript}</p>
            </div>
            </div>
            <main  className={`w-full max-w-3xl`}>{props.children}</main>
        </div>
    )
}

export default Container;
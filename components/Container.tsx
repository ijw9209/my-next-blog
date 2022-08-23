import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import metadata from '../data/metadata';
import Nav from './Nav';
import Link from "next/link";
import Image from 'next/image';

import containerstyle from './Container.module.css';

const Container = (props) => {
    const mainTitle = metadata.mainTitle;
    const [Text, setText] = useState('');
    const [Count, setCount] = useState(0);
    const meta = {
        title: metadata.title,
        description: metadata.description,
        author: metadata.author,
        ...props.customMeta,
      };
    useEffect(() => {
      const interval = setInterval(() => {
        setText(Text + mainTitle[Count]);
        setCount(Count + 1);
      }, 100)
      if(Count === mainTitle.length) {
        clearInterval(interval);
        
      }
      return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    })


    return (
        // p-3
        <div className={`w-full flex flex-col items-center h-auto min-h-full pb-52`}>
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
              {/* <TypeAnimation 
                // sequence={[metadata.mainTitle, 2000]}
                wrapper="div"
                cursor={true}

              /> */}
              <p className={`text-5xl font-medium text-white ${containerstyle.cursor}`}>
                {Text}
                </p>
              <p className={`text-1xl font-medium text-white mt-6`}>{metadata.mainDescript}</p>
            </div>
            </div>
            <main  className={`w-full max-w-3xl`}>{props.children}</main>
            <footer className={`h-52 w-full bg-slate-100 relative translate-y-full`}></footer>
        </div>
    )
}

export default Container;
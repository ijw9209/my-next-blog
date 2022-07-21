import Head from 'next/head';
import metadata from '../data/metadata';
import Nav from './Nav';
import Image from 'next/image';

const Container = (props) => {
    console.log(props)
    return (
        <div className={`w-full flex flex-col items-center p-3`}>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <header className={`w-full max-w-3xl flex flex-row justify-between items-center my-1`}>
                <div className={`flex flex-row items-center`}>
                    {/* 이미지로고 영역 */}
                <Image
                   src={`/123.jpg`}
                   alt="로고"
                   width={40}
                   height={40}
                   objectFit={`cover`}
                   className={`rounded-full`}
                 /> 
                <span className={`mx-2 font-extralight text-lg`}>
                  {metadata.title}
                </span>
                </div>
                <Nav/>
            </header>
            <main  className={`w-full max-w-3xl`}>{props.children}</main>
        </div>
    )
}

export default Container;
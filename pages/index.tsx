import type { NextPage } from 'next';
import Container from '../components/Container';
import Image from 'next/image';
import metadata from '../data/metadata';
import RecentPosts from '../components/RecentPosts';
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useEffect } from 'react';
// import Terminal from 'components/Terminal';

//InferGetStaticPropsType : 컴포넌트에 사용되는 제네릭 타입
//getStaticProps : 호출된 함수에서 getStaticProps를 내보내면 props 를 미리 렌더링 시킴
// getStaticProps가 필요할 때
// 페이지에 필요한 데이터가 빌드 시에 사용가능할때
// 모든 사용자에게 같은 데이터를 보여줄때
// SEO를 위해 속도 빠른 페이지가 필요할때

const Home:NextPage = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {


   
    return (
    <>
    <Container>
        <div className={`my-5 w-full`}>
            <div className={`relative`}>
            {/* <Image
            src={`/123.jpg`}
            alt="대표 이미지"
            width={`100%`}
            height={45}
            layout={`responsive`}
            objectFit="cover"
            className={`rounded-3xl`}
          /> */}
            {/* <span
                className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}>
                {metadata.title}
            </span> */}
            </div>
            {/* <Terminal /> */}
            
            <RecentPosts posts={posts}/>
        </div>
    </Container>
      
    </>
    );
}

export const getStaticProps = async () => {
    const posts = allPosts.sort(
      (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
    );
   
    return {
      props: {
        posts,
      },
    };
  };
  
  export default Home;
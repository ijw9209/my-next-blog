import { useState } from 'react';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { FaSearch } from "react-icons/fa";


const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    let [allPosts, setAllPosts] = useState(posts);
    // let [searchVal, setSearchVal] = useState<string>('');
    let [searchPost, setSearchPost] = useState(posts);

    const searchChange = (e : React.FormEvent<HTMLInputElement>) => {
      e.preventDefault();
      let searchVal = e.currentTarget.value;

      if(searchVal === '' || searchVal === null) {
        setSearchPost(allPosts);
      }else {
        const fillterData = allPosts.filter(post => post.title.includes(searchVal));
        setSearchPost(fillterData);
      }

    }
    
    return (
        <Container>
            <div className={`mt-10 flex flex-col`}>
              <div>
                <input placeholder='Search...' 
                className={`border-2 border-cyan-200 outline-cyan-200 w-full h-10 rounded-lg pl-8`} 
                type="text"
                onChange={searchChange}
                />
                <FaSearch className={`relative bottom-7 left-2.5`}/>
              </div>
              {searchPost.map((post) => (
                <BlogPost
                  date={post.date}
                  title={post.title}
                  des={post.description}
                  slug={post._raw.flattenedPath}
                  key={post._id}
                />
              ))}
            </div>
        </Container>
    );
}

// getStaticeProps : 사전 렌더링 프로세스 동안 이 함수를 실행, 즉 빌드할 때 실행
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
  
  export default Blog;
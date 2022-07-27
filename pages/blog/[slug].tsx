import Container from "components/Container";
import { allPosts } from "contentlayer/generated";
import { InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post } : InferGetStaticPropsType<typeof getStaticProps>) => {
    const MDXCompoent = useMDXComponent(post.body.code);
    const customMeta = {
        title : post.title,
        description : post.description,
        date : new Date(post.date).toISOString(),
    }
    return ( 
        <Container customMeta={customMeta}>
            <div className="mt-10 prose">
                <h1 className="text-sky-700">{post.title}</h1>
                <MDXCompoent />
            </div>
        </Container>
    )
}

// getStaticPaths : 동적 라우팅을 사용할 때, 어떤 페이지를 미리 static으로 빌드할 지 정함
// { parmas : {} }[] 형태로 paths 리턴 빌드시 해당 페이지를 static 으로 생성
// fallback을 리턴 해야함

// fallback : false  getStaticPaths에서 리턴하지 않은 페이지는 모두 404로 연결
// fallback : true 
// getStaticPaths에서 리턴하지 않은 페이지에 접속 시,

// 먼저 사용자에게 fallback 페이지를 보여줌
// 서버에서 static하게 페이지를 생성함
// 해당 페이지를 사용자에게 보여줌
// 다음부터 해당 페이지로 접속하는 사용자에게는 static한 페이지를 보여줌

// fallback : blocking
// getStaticPaths에서 리턴하지 않은 페이지에 접속 시,

// 사용자에게 server side rendering한 static 페이지를 보여줌
// 다음부터 해당 페이지로 접속하는 사용자에게는 server side rendering한 static 페이지를 보여줌
export const getStaticPaths = async () => {
    return { 
        paths : allPosts.map((p) => ({params : { slug : p._raw.flattenedPath}})),
        fallback : false,
    };
};

export const getStaticProps = async ({params }) => {
    const post = allPosts.find((p) => p._raw.flattenedPath === params.slug);
    return {
        props : {
            post,
        }
    }
}

export default Post;
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';

const Blog = () => {
    return (
        <Container>
            <div className={`mt-10 flex flex-col`}>
               <BlogPost />
               <BlogPost />
               <BlogPost />
            </div>
        </Container>
    );
}

export default Blog;
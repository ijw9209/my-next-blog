import Link from 'next/link';

import dateFormat from '../modules/dateFormat';

const RecentPosts = ({ posts }) => {
    return (
      <section className={`mt-10`}>
        <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
        <div className={`flex flex-col`}>
          {posts.slice(0, 5).map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post._raw.flattenedPath}`}
              passHref
            >
              <a className="mt-5">
                <div className={`font-medium text-xl my-1.5`}>{post.title}</div>
                <div className={`font-light my-1.5`}>{post.description}</div>
                {/* <div>{(post.date).substring(0,10)}</div>  */}
                <div className={`text-sm mt-1.5 text-slate-500`}>{dateFormat(post.date)}</div> 
              </a>
            </Link>
          ))}
        </div>
      </section>
    );
  };
  
  export default RecentPosts;
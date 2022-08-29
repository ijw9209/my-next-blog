import Link from 'next/link';

import dateFormat from '../modules/dateFormat';
const BlogPost = ({date , title , des , slug}) => {
    return (
        <Link href={`/blog/${slug}`} passHref>
          <a className="w-full my-7 hover:-translate-x-1.5">
            <div className="font-medium text-xs text-gray-400">{dateFormat(date)}</div>
            <div className={`font-extrabold text-2xl mt-2`}>{title}</div>
            <div className={`font-medium text-gray-600 text-base mt-1`}>{des}</div>
          </a>
        </Link>
    )
}

export default BlogPost;
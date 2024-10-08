import Image from 'next/image';
import Link from 'next/link';
import { Post } from '../lib/post';
const LatestCard = ({ post, idx }: { post: Post; idx: number }) => {
  return (
    <Link
      href={post.slug}
      className="overflow-hidden rounded-xl bg-neutral-200 dark:bg-neutral-800"
      style={{ opacity: 1, willChange: 'opacity', transform: 'none' }}
    >
      <div>
        <Image
          alt="Drag 이벤트 뽀개기"
          draggable="false"
          src={`/images/latest${idx + 1}.png`}
          width="300"
          height="300"
          decoding="async"
          data-nimg="1"
          className="h-64 w-full object-cover"
          loading="lazy"
          style={{ color: 'transparent' }}
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex w-full items-end">
          <div className="flex items-center gap-1 text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              width="14"
              height="14"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              ></path>
            </svg>
            <span>{post.date}</span>
          </div>
        </div>
        <p className="text-xl font-bold tracking-tight md:text-lg">
          {post.title}
        </p>
      </div>
    </Link>
  );
};

export default LatestCard;

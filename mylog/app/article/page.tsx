import Card from '../component/ArticleCard/Card';
import TagBox from '../component/Tags/TagBox';
import SplitLine from '../component/global/SplitLine';
import SubTitle from '../component/global/SubTitle';
import { getAllPosts } from '../lib/post';

export default function PostsPage() {
  const posts = getAllPosts();
  const tags = Array.from(
    new Set(posts.reduce((acc, curr) => acc.concat(curr.tags), [''])),
  );

  console.log(tags);
  // console.log(posts);
  return (
    <div>
      <SubTitle subTitle={`Tag`} />
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <TagBox tagName={tag} key={i} />
        ))}
      </div>
      <SplitLine />
      <SubTitle subTitle={`Article`} />
      <div className={`flex flex-wrap`}>
        {posts.map((post, i) => (
          <Card post={post} key={i} />
        ))}
      </div>
    </div>
  );
}

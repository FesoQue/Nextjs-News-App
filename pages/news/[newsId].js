import { useRouter } from 'next/router';
// * our-domain.com/news/politics

const PoliticsNews = () => {
  const router = useRouter();

  const newsId = router.query.newsId;

  return (
    <div>
      <h1>This is a nested route</h1>
      <h3>This is politics news section</h3>
    </div>
  );
};

export default PoliticsNews;

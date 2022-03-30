import classes from '../../styles/Feed.module.css';
import { useRouter } from 'next/router';

const Feed = (props) => {
  const router = useRouter();

  const { newsPost, pageNumber } = props;
  return (
    <div className='container'>
      <div className={classes.main}>
        {newsPost.map((article, index) => {
          return (
            <div key={index} className={classes.post}>
              <h1 onClick={() => (window.location.href = article.url)}>
                {article.title}
              </h1>
              <p>{article.description}</p>
              <img
                src={article.urlToImage ? article.urlToImage : null}
                alt='image'
                loading='lazy'
              />
            </div>
          );
        })}
      </div>

      <div className={classes.paginator}>
        <div
          onClick={() => {
            if (pageNumber > 1) {
              router.push(`/feed/${pageNumber - 1}`);
            }
          }}
          className={pageNumber === 1 ? classes.disabled : classes.active}
        >
          Previous Page
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );

  const apiJson = await apiResponse.json();

  const newsPost = apiJson.articles;

  return {
    props: {
      newsPost,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;

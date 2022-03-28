// * our-domain.com/news
import Link from 'next/link';

const NewsPage = () => {
  return (
    <>
      <ul>
        <li>
          <Link href='/'>Intro to NextJs</Link>
        </li>
        <li>
          <Link href='/'>Basic of NextJs</Link>
        </li>
        <li>
          <Link href='/'>Building blocks of NextJs</Link>
        </li>
        <li>
          <Link href='/'>NextJs advanced topics and projects</Link>
        </li>
      </ul>
    </>
  );
};

export default NewsPage;

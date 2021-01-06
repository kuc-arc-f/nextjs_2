import Link from 'next/link';
import Head from 'next/head';
//
export default function(){
  return (
    <div>
      <Head>
          <title key="title">NextJs App</title>
      </Head>      
      <Link href="/">
        <a>[ Home ]</a>
      </Link>
      <Link href="/about">
        <a>[ About ]</a>
      </Link>
      <hr />
    </div>
  );
}

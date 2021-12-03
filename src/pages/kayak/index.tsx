// import ExamplesPage from '@components/examples';
import KayakPage from '@components/kayak/kayak-page';
import { NextPage } from 'next';
import React from 'react';

/*
interface IProps {
  pageSeo: any
}
*/


const KayakHome: NextPage = () => {
  // const { pageSeo } = props
  return (
    <>
      {/* <Head>
        <title>{pageSeo?.title}</title>
        <meta name="description" content={pageSeo?.description} />
        <meta name="og:title" content={pageSeo?.title} />
        <meta name="og:url" content={pageSeo?.url} />
        <meta name="og:type" content={pageSeo?.type} />
        <meta name="og:site_name" content={pageSeo?.site_name} />
        <meta name="og:description" content={pageSeo?.description} />
        <meta name="og:image" content={pageSeo?.image} />
      </Head>  */}
      <div>
        <KayakPage />
      </div>
    </>
  );
};


export default KayakHome;

import { InferGetStaticPropsType } from 'next';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import { Experience, getSortedExperiencesData } from '../lib/experience/experiences';
import utilStyles from '../styles/utils.module.css';
import DateRange from '../components/dateRange';

export async function getStaticProps() {
  const allExperiencesData: Experience[] = await getSortedExperiencesData();
  return {
    props: {
      allExperiencesData,
    },
  };
}

export default function Home({ allExperiencesData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Professional Experience</h2>
        <ul className={utilStyles.list}>
          {allExperiencesData.map(({ _id, startDate, endDate, companyName }) => (
            <li className={utilStyles.listItem} key={_id}>
              <Link href={`/experience/${_id}`}>{companyName}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateRange startDateString={startDate} endDateString={endDate} />
              </small>
            </li>
          ))}
        </ul>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allExperiencesData.map(({ _id, startDate, endDate, companyName }) => (
            <li className={utilStyles.listItem} key={_id}>
              <Link href={`/experience/${_id}`}>{companyName}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <DateRange startDateString={startDate} endDateString={endDate} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

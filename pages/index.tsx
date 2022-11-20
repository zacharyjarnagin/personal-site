import { InferGetStaticPropsType } from 'next';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import { Experience, getSortedExperiencesData } from '../lib/experience/experiences';
import { getSortedProjectsData, Project } from '../lib/project/projects';
import { Stack } from '@mui/system';
import ExperienceTimeline from '../components/experienceTimeline';
import Projects from '../components/projects';

export async function getStaticProps() {
  const allExperiencesData: Experience[] = await getSortedExperiencesData();
  const allProjectsData: Project[] = await getSortedProjectsData();
  return {
    props: {
      allExperiencesData,
      allProjectsData,
    },
  };
}

export default function Home({ allExperiencesData, allProjectsData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <>
        <Head>
          <title>{siteTitle}</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Stack spacing={1}>
          <ExperienceTimeline allExperiencesData={allExperiencesData} />
          <Projects allProjectsData={allProjectsData} />
        </Stack>
      </>
    </Layout >
  )
}

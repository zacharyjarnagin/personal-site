import { InferGetStaticPropsType } from 'next';
import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import { Experience, getSortedExperiencesData } from '../lib/experience/experiences';
import DateRange from '../components/dateRange';
import Date from '../components/date';
import { getSortedProjectsData, Project } from '../lib/project/projects';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Container, Typography } from '@mui/material';
import { Stack } from '@mui/system';

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
  const experiencesLength = allExperiencesData.length;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Stack spacing={12}>
        <Typography variant="h4">Professional Experience</Typography>
        <Timeline>
          {allExperiencesData.map(({ _id, startDate, endDate, companyName, jobTitle }, idx) => (
            <Link href={`/experience/${_id}`} key={_id}>
              <TimelineItem>
                <TimelineOppositeContent>
                  <Typography variant="h6" gutterBottom>{companyName}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  {idx != (experiencesLength - 1) && <TimelineConnector />}
                </TimelineSeparator >
                <TimelineContent color="gray">
                  <Stack>
                    <Typography variant="overline">{jobTitle}</Typography>
                    <DateRange startDateString={startDate} endDateString={endDate} />
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            </Link>
          ))}
        </Timeline>
        <Typography variant="h4">Projects</Typography>
        <Stack>
          {allProjectsData.map(({ _id, date, projectName }) => (
            <Stack key={_id}>
              <Link href={`/project/${_id}`}><Typography variant="h6">{projectName}</Typography></Link>
              <Date dateString={date} />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Layout >
  )
}

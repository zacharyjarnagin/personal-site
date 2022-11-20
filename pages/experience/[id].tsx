import Head from 'next/head';
import { Experience, getAllExperienceIds, getExperienceData } from '../../lib/experience/experiences';
import Layout from '../../components/layout';
import DateRange from '../../components/dateRange';
import Technologies from '../../components/technologies';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';


export async function getStaticProps({ params }): Promise<{ props: { experienceData: Experience } }> {
    const experienceData = await getExperienceData(params.id);

    return {
        props: {
            experienceData,
        },
    };
}

export async function getStaticPaths() {
    const paths = await getAllExperienceIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post(props: { experienceData: Experience }) {
    return (
        <Layout>
            <Head>
                <title>{props.experienceData.companyName}</title>
            </Head>
            <Stack spacing={2}>
                <Stack>
                    <Typography variant="h3">{props.experienceData.companyName}</Typography>
                    <Typography variant="overline">{props.experienceData.jobTitle}</Typography>
                </Stack>
                <DateRange startDateString={props.experienceData.startDate} endDateString={props.experienceData.endDate} />
                <Typography variant="body1" paragraph={true}>{props.experienceData.description}</Typography>
                <Technologies technologies={props.experienceData.technologies} />
            </Stack>
        </Layout>
    );
}
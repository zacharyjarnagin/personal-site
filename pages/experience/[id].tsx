import Head from 'next/head';
import { Experience, getAllExperienceIds, getExperienceData } from '../../lib/experience/experiences';
import Layout from '../../components/layout';
import DateRange from '../../components/dateRange';
import Technologies from '../../components/technologies';
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';


export async function getStaticProps({ params }: { params: { id: string } }): Promise<{ props: { experienceData: Experience } }> {
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

export default function Post({ experienceData }: { experienceData: Experience }) {
    return (
        <Layout home={false}>
            <>
                <Head>
                    <title>{experienceData.companyName}</title>
                </Head>
                <Stack spacing={2}>
                    <Stack>
                        <Typography variant="h3">{experienceData.companyName}</Typography>
                        <Typography variant="overline">{experienceData.jobTitle}</Typography>
                    </Stack>
                    <DateRange startDateString={experienceData.startDate} endDateString={experienceData.endDate} />
                    <Typography variant="body1" paragraph={true}>{experienceData.description}</Typography>
                    <Technologies technologies={experienceData.technologies} />
                </Stack>
            </>
        </Layout>
    );
}
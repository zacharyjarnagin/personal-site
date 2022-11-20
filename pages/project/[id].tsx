import Head from 'next/head';
import { Project, getAllProjectIds, getProjectData } from '../../lib/project/projects';
import Layout from '../../components/layout';
import Date from '../../components/date';
import Technologies from '../../components/technologies';
import { Stack, Typography } from '@mui/material';


export async function getStaticProps({params}: any): Promise<{ props: { projectData: Project } }> {
    const projectData = await getProjectData(params.id);
    return {
        props: {
            projectData,
        },
    };
}

export async function getStaticPaths() {
    const paths = await getAllProjectIds();
    return {
        paths,
        fallback: false,
    };
}

export default function Post(props: { projectData: Project }) {
    return (
        <Layout home={false}>
            <>
                <Head>
                    <title>{props.projectData.projectName}</title>
                </Head>
                <Stack spacing={2}>
                    <Typography variant="h3">{props.projectData.projectName}</Typography>
                    <Date dateString={props.projectData.date} />
                    <Typography variant="body1" paragraph={true}>{props.projectData.description}</Typography>
                    <Technologies technologies={props.projectData.technologies} />
                </Stack>
            </>
        </Layout>
    );
}
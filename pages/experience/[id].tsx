import Head from 'next/head';
import { Experience, getAllExperienceIds, getExperienceData } from '../../lib/experience/experiences';
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import DateRange from '../../components/dateRange';


export async function getStaticProps({ params }): Promise<{ props: { experienceData: Experience } }> {
    // Add the "await" keyword like this:
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
            <article>
                <h1 className={utilStyles.headingXl}>{props.experienceData.companyName}</h1>
                <h1 className={utilStyles.headingMd}>{props.experienceData.jobTitle}</h1>

                <div className={utilStyles.lightText}>
                    <DateRange startDateString={props.experienceData.startDate} endDateString={props.experienceData.endDate} />
                </div>
                <div>
                    <p>{props.experienceData.description}</p>
                    <p>{props.experienceData.technologies}</p>
                </div>
            </article>
        </Layout>
    );
}
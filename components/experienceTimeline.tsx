import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import DateRange from '../components/dateRange';
import { Container, Typography, Stack } from '@mui/material';
import Link from 'next/link';
import { Experience } from '../lib/experience/experiences';


export default function ExperienceTimeline({ allExperiencesData }: {allExperiencesData: Experience[]}) {
    const experiencesLength = allExperiencesData.length;
    return (
        <Container>
            <Typography variant="h4">Professional Experience</Typography>
            <Timeline>
                {allExperiencesData.map(({ id, startDate, endDate, companyName, jobTitle }, idx) => (
                    <Link href={`/experience/${id}`} key={id}>
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
        </Container>
    )
}
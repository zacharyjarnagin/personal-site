import { Typography } from '@mui/material';
import { parseISO, format } from 'date-fns';

export default function DateRange({ startDateString, endDateString }: { startDateString: string, endDateString: string | undefined }) {
    const startDate = parseISO(startDateString);
    const endDate = endDateString ? parseISO(endDateString) : null;
    return (
        <Typography variant="overline" color="grey.600" gutterBottom>
            <time dateTime={startDateString}>{format(startDate, 'LLLL yyyy')}</time> - {endDate ? <time dateTime={endDateString}>{format(endDate, 'LLLL yyyy')}</time> : 'Current'}
        </Typography>
    );
}
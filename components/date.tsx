import { parseISO, format } from 'date-fns';
import { Typography } from '@mui/material';

export default function Date({ dateString }: { dateString: string }) {
    const date = parseISO(dateString);
    return (
        <Typography variant="overline" color="grey.600" gutterBottom>
            <time dateTime={dateString}>{format(date, 'LLLL yyyy')}</time>
        </Typography>);
}
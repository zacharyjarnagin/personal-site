import { Typography } from '@mui/material';
import { parseISO, format } from 'date-fns';

export default function DateRange(props) {
    const startDate = parseISO(props.startDateString);
    const endDate = props.endDateString ? parseISO(props.endDateString) : null;
    return (
        <Typography variant="overline" color="grey.600" gutterBottom>
            <time dateTime={props.startDateString}>{format(startDate, 'LLLL yyyy')}</time> - {endDate ? <time dateTime={props.endDateString}>{format(endDate, 'LLLL yyyy')}</time> : 'Current'}
        </Typography>
    );
}
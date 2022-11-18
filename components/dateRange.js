import { parseISO, format } from 'date-fns';

export default function DateRange(props) {
    const startDate = parseISO(props.startDateString);
    const endDate = props.endDateString ? parseISO(props.endDateString) : null;
    return (
        <p>
            <time dateTime={props.startDateString}>{format(startDate, 'LLLL yyyy')}</time> - {endDate ? <time dateTime={props.endDateString}>{format(endDate, 'LLLL yyyy')}</time> : 'Current'}</p>
    );
}
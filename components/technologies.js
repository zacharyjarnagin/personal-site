import { Chip, Stack, Typography } from '@mui/material';

export default function Technologies({ technologies }) {
    return (
        <Stack spacing={2} gutterBottom>
            <Typography variant="h6">Technologies</Typography>
            <Stack direction="row" spacing={1}>
                {technologies.map((technology) => (
                    <Chip label={technology} color="primary" />
                ))}
            </Stack>
        </Stack>
    )
}
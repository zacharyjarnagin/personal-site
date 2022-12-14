import { Chip, Stack, Typography } from '@mui/material';

export default function Technologies({ technologies }: { technologies: string[] }) {
    return (
        <Stack spacing={2}>
            <Typography variant="h6">Technologies</Typography>
            <Stack direction="row" spacing={1}>
                {technologies.map((technology) => (
                    <Chip key={technology} label={technology} color="primary" />
                ))}
            </Stack>
        </Stack>
    )
}
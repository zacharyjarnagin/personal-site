import { Box, Grid, Container, Typography } from "@mui/material";
import Link from "next/link";

export default function footer() {
    return (
        <>
            <Box
                px={{ xs: 3, sm: 10 }}
                py={{ xs: 5, sm: 5 }}
                sx={{ backgroundColor: '#00303d',  display: 'flex', flexDirection: 'column' }}
                color="white"
            >
                <Container maxWidth="lg">
                    <Grid container>
                        <Box textAlign="center" pb={{ xs: 3, sm: 0 }}>
                            <Typography variant='h5'>Zachary Jarnagin</Typography>
                        </Box>
                        <Grid container spacing={2} justifyContent="flex-end">
                            <Grid item xs={12} sm={4}>
                                <Box>
                                    <Link target="_blank" href="https://www.linkedin.com/in/zachary-jarnagin/" color="inherit">
                                        <Typography variant='overline'>LinkedIn</Typography>

                                    </Link>
                                </Box>
                                <Box>
                                    <Link target="_blank" href="https://github.com/zacharyjarnagin" color="inherit">
                                        <Typography variant='overline'>GitHub</Typography>
                                    </Link>
                                </Box>
                                <Box>
                                    <a
                                        href="/files/Zachary_Jarnagin__Resume.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <Typography variant='overline'>Resume</Typography>
                                    </a>
                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>

                </Container>
            </Box>
        </>
    )
}
import { Typography, Stack } from "@mui/material";
import Link from "next/link";
import { Project } from "../lib/project/projects";
import Date from "./date";

export default function Projects({allProjectsData}: {allProjectsData: Project[]}) {
    return (
        <>
            <Typography variant="h4">Projects</Typography>
            <Stack>
                {allProjectsData.map(({ id, date, projectName }) => (
                    <Stack key={id}>
                        <Link href={`/project/${id}`}><Typography variant="h6">{projectName}</Typography></Link>
                        <Date dateString={date} />
                    </Stack>
                ))}
            </Stack>
        </>
    )
}
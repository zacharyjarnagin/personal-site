import { GetStaticPaths } from "next";

async function getData() {
    const res = await fetch(`${process.env.API_URL}/project/getAll/`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.


    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }
    const objs = await res.json();
    objs.map((obj: any) => {
        obj['id'] = obj['_id'];
        delete obj['_id'];
        delete obj['__v'];
    })
    return objs;
}

export async function getSortedProjectsData(): Promise<Project[]> {
    const data: Project[] = await getData();
    // Sort posts by date
    return data.sort(({ date: a }, { date: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export async function getAllProjectIds(): Promise<{ params: { id: string; }; }[]> {
    const projects = await getData();
    return projects.map((project: Project) => {
        return {
            params: {
                id: project.id,
            },
        };
    });
}

export async function getProjectData(id: string): Promise<Project> {
    const projects = await getData();
    return projects.find((project: Project) => project.id === id);
}

export type Project = {
    id: string;
    projectName: string;
    url: string | undefined;
    date: string;
    description: string | undefined;
    technologies: string[];
}
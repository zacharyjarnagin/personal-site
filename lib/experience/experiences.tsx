import { GetStaticPaths } from "next";

async function getData() {
    const res = await fetch('http://localhost:8000/api/getAll/');
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.


    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export async function getSortedExperiencesData(): Promise<Experience[]> {
    const data: Experience[] = await getData();
    // Sort posts by date
    return data.sort(({ startDate: a }, { startDate: b }) => {
        if (a < b) {
            return 1;
        } else if (a > b) {
            return -1;
        } else {
            return 0;
        }
    });
}

export async function getAllExperienceIds(): Promise<{ params: { id: string; }; }[]> {
    const experiences = await getData();
    return experiences.map((experience: Experience) => {
        return {
            params: {
                id: experience._id,
            },
        };
    });
}

export async function getExperienceData(id: string): Promise<Experience> {
    const experiences = await getData();

    return experiences.find((experience: Experience) => experience._id === id);
}

export type Experience = {
    _id: string;
    companyName: string;
    companyUrl: string | undefined;
    companyLogoUrl: string | undefined;
    jobTitle: string;
    startDate: string;
    endDate: string | undefined;
    description: string | undefined;
    technologies: string[];
}
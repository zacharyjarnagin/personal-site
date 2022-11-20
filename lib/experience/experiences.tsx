async function getData() {
    const res = await fetch(`${process.env.API_URL}/experience/getAll/`);
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    const objs = await res.json();
    objs.map((obj: any) => {
        obj['id'] = obj['_id'];
        delete obj['_id'];
        delete obj['__v'];
    });

    return objs;
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
                id: experience.id,
            },
        };
    });
}

export async function getExperienceData(id: string): Promise<Experience> {
    const experiences = await getData();
    return experiences.find((experience: Experience) => experience.id === id);
}

export type Experience = {
    id: string;
    companyName: string;
    companyUrl: string | undefined;
    companyLogoUrl: string | undefined;
    jobTitle: string;
    startDate: string;
    endDate: string | undefined;
    description: string | undefined;
    technologies: string[];
}
# Personal Site
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development

First, make sure the backend server is reachable through the url specified in your `.env` file under the `API_KEY` environment variable.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.


## Folder Structure
### `components/`
Abstracted components to be used throughout the application.

### `lib/`
#### `experience/`
Represents my professional experiences. Grabs data from the following endpoint:
    
    `${process.env.API_URL}/experience/getAll/`

The file contains the following functions:
- getData
- getSortedExperiencesData
- getAllExperienceIds
- getExperienceData

The functions defined here are used in `pages/expereince/[id].tsx`. The data structure for an experience looks like this:

    id: string;
    companyName: string;
    companyUrl: string | undefined;
    companyLogoUrl: string | undefined;
    jobTitle: string;
    startDate: string;
    endDate: string | undefined;
    description: string | undefined;
    technologies: string[];

#### `project/`
Represents my personal projects. Grabs data from the following endpoint:
    
    `${process.env.API_URL}/project/getAll/`

The file contains the following functions:
- getData
- getSortedProjectsData
- getAllProjectIds
- getProjectData

The functions defined here are used in `pages/project/[id].tsx`. The data structure for a project looks like this:

    id: string;
    projectName: string;
    url: string | undefined;
    date: string;
    description: string | undefined;
    technologies: string[];

### `pages/`
Adhere to Next.js standards. A file names `[id].tsx` represents a dynamic route. Each folder represents a url segment in the url associated with the file. For more information, please see [Routing Fundamentals with Next.js](https://beta.nextjs.org/docs/routing/fundamentals).

### `public/`
Contains static files to display on the site. Update the resume under `files/<RESUME_NAME>.pdf` as needed.

### `.env`
Defines an `API_URL` environment variable to use for API calls. Defaults to localhost on port 8000. This should be populated in Vercel upon deployment.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

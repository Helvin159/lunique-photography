import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const ProjectsContext = createContext({
	projects: null,
	projectsGallery: null,
	setProjects: () => null,
	setProjectsGallery: () => null,
});

export const ProjectsProvider = ({ children }) => {
	const [projects, setProjects] = useState(null);
	const [projectsGallery, setProjectsGallery] = useState(null);

	const getProjects = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const projectsRes = await client.getEntries({
			content_type: process.env.REACT_APP_CONTENTFUL_PROJECTS_CONTENT_TYPE,
		});

		let projectImages = [];
		for (let i = 0; i < projectsRes?.items?.length; i++) {
			if (projectsRes?.items[i]?.fields?.pictures) {
				projectImages.push(...projectsRes?.items[i]?.fields?.pictures);
			}
		}

		setProjectsGallery(projectImages);
		setProjects(projectsRes);
	};

	useEffect(() => {
		getProjects();
	}, []);

	const value = { projects, setProjects, projectsGallery, setProjectsGallery };

	return (
		<ProjectsContext.Provider value={value}>
			{children}
		</ProjectsContext.Provider>
	);
};

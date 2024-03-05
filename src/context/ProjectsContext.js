import { createContext, useEffect, useState } from 'react';
import { createClient } from 'contentful';

export const ProjectsContext = createContext({
	projects: null,
	setProjects: () => null,
});

export const ProjectsProvider = ({ children }) => {
	const [projects, setProjects] = useState(null);

	const getProjects = async () => {
		const client = createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
			accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_KEY,
		});

		const projectsRes = await client.getEntries({
			content_type: 'projects',
		});

		setProjects(projectsRes);
	};

	useEffect(() => {
		getProjects();
	}, []);

	const value = { projects, setProjects };

	return (
		<ProjectsContext.Provider value={value}>
			{children}
		</ProjectsContext.Provider>
	);
};

import { Chip } from '../chip/chip';

const projectsInfo = [
    {
        id: 1,
        title: 'Gym Routines app',
        description:
            'Allows you to view, create, edit or delete customized gym routines',
        url_github: 'https://github.com/XistriXostri/gym-routines',
        url_web: 'https://gym-routines.netlify.app/',
        technologies: ['ReactJS', 'TypeScript', 'Redux', 'Jest', 'Firebase'],
    },
    {
        id: 2,
        title: 'Robots App',
        description:
            'Allows you to create robots, modify their statistics, delete them or add/remove them from favorites.',
        url_github:
            'https://github.com/XistriXostri/202212-XMAS-cristian-marti',
        url_web: 'https://xmas-challenge-cristian-marti.netlify.app/',
        technologies: ['ReactJS', 'TypeScript', 'Jest'],
    },
    {
        id: 3,
        title: 'Game of thrones challenge',
        description: 'Allows to make game of thrones characters speak or die',
        url_github: 'https://github.com/XistriXostri/202301-W13-cristian-marti',
        url_web: 'https://cristian-marti-flux-challenge.netlify.app/',
        technologies: ['ReactJS', 'Flux', 'TypeScript'],
    },
];

export const ProjectsCards = () => {
    return (
        <section>
            {projectsInfo.map((project) => (
                <div key={project.id} className="projectCard">
                    <h1>{project.title}</h1>

                    <img
                        src={`/projects/project-${project.id}.PNG`}
                        alt={project.title}
                    />
                    <div className="projectCard__info">
                        <p>{project.description}</p>
                        <div>
                            {project.technologies.map((technology) => (
                                <Chip
                                    key={technology}
                                    name={technology}
                                    color="grey"
                                />
                            ))}
                        </div>
                        <div className="projectCard__links">
                            <a
                                href={project.url_github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="github"
                            >
                                <img src="./icons/github.svg" alt="github" />
                            </a>
                            <a
                                href={project.url_web}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="web"
                            >
                                <img src="./icons/world.svg" alt="web" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

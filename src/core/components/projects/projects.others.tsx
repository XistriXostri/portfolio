import { Chip } from '../chip/chip';

const othersProjects = [
    {
        id: 1,
        title: 'Formulary app',
        description: 'registration simulation form',
        url_github: 'https://github.com/XistriXostri/202210-W11-cristian-marti',
        url_web: 'https://cristian-marti-w11.netlify.app/',
        technologies: [
            {
                id: 1,
                name: 'Typescript',
            },
            {
                id: 2,
                name: 'HTML',
            },
            {
                id: 3,
                name: 'CSS',
            },
        ],
    },
    {
        id: 2,
        title: 'Pointing gentlemans app',
        description: 'gentleman list',
        url_github: 'https://github.com/XistriXostri/202210-W10-cristian-marti',
        url_web: 'https://pointing-gentlemans.netlify.app/',
        technologies: [
            {
                id: 1,
                name: 'Typescript',
            },
            {
                id: 2,
                name: 'HTML',
            },
            {
                id: 3,
                name: 'CSS',
            },
        ],
    },
    {
        id: 3,
        title: 'Series app',
        description: 'series list simulator',
        url_github: 'https://github.com/XistriXostri/202210-W8-cristian-marti',
        url_web: 'https://series-list.netlify.app/',
        technologies: [
            {
                id: 1,
                name: 'Typescript',
            },
            {
                id: 2,
                name: 'HTML',
            },
            {
                id: 3,
                name: 'CSS',
            },
        ],
    },
    {
        id: 4,
        title: 'Calculator',
        description:
            'Sitio web para una empresa de comida rápida, con un diseño moderno y minimalista, con un menú interactivo y un carrito de compras.',
        url_github: 'https://github.com/XistriXostri/202210-W1-cristian-marti',
        url_web:
            'https://202210-w1-cristian-marti.netlify.app/calculator/calculadora.html',
        technologies: [
            {
                id: 1,
                name: 'JavaScript',
            },
            {
                id: 2,
                name: 'HTML',
            },
            {
                id: 3,
                name: 'CSS',
            },
        ],
    },
];
export function OtherProjects() {
    return (
        <div className="othersProjects">
            {othersProjects.map((project) => (
                <div key={project.id} className="othersProjects__card">
                    <div className="othersProjects__links">
                        <img src="./icons/folder.svg" alt="folder icon" />
                        <div>
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
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                    <div className="othersProjects__labels">
                        {project.technologies.map((technology) => (
                            <Chip
                                key={technology.id}
                                name={technology.name}
                                color="purple"
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

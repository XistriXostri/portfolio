import { Chip } from '../chip/chip';

const skills = [
    {
        id: 1,
        id_dropdown: 'frontend',
        title: 'Frontend',
        icon: <img src="./icons/code.svg" alt="code" />,
        skills: [
            {
                id: 1,
                skill: 'HTML5',
            },
            {
                id: 2,
                skill: 'CSS3',
            },
            {
                id: 3,
                skill: 'JavaScript',
            },
            {
                id: 4,
                skill: 'ReactJS',
            },
            {
                id: 5,
                skill: 'TypeScript',
            },
            {
                id: 6,
                skill: 'Sass',
            },
        ],
    },
    {
        id: 2,
        id_dropdown: 'libraries',
        title: 'Libraries',
        icon: <img src="./icons/book.svg" alt="book" />,
        skills: [
            {
                id: 1,
                skill: 'Flux',
            },
            {
                id: 2,
                skill: 'Redux',
            },
        ],
    },
    {
        id: 3,
        id_dropdown: 'testing',
        icon: <img src="./icons/lab.svg" alt="flask" />,
        title: 'Testing',
        skills: [
            {
                id: 1,
                skill: 'Jest',
            },
            {
                id: 3,
                skill: 'React Testing Library',
            },
        ],
    },
    {
        id: 4,
        id_dropdown: 'tools',
        title: 'Tools',
        icon: <img src="./icons/tool.svg" alt="tool" />,
        skills: [
            {
                id: 1,
                skill: 'GitHub',
            },
            {
                id: 2,
                skill: 'GitLab',
            },
            {
                id: 3,
                skill: 'Postman',
            },
            {
                id: 4,
                skill: 'Eslint',
            },
        ],
    },
];

export function Skills() {
    return (
        <div className="skill__type">
            {skills.map((skill) => (
                <div key={skill.id}>
                    <>{skill.icon}</>
                    <p className="skill__cards">
                        {skill.skills.map((skill) => {
                            return (
                                <Chip
                                    key={skill.id}
                                    name={skill.skill}
                                    color="grey"
                                />
                            );
                        })}
                    </p>
                </div>
            ))}
        </div>
    );
}

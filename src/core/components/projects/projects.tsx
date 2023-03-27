import { ProjectsCards } from './projects.cards';
import './projects.css';
import { OtherProjects } from './projects.others';

export function Projects() {
    return (
        <section className="projects">
            <div className="section__tittle">
                <h1>My Projects</h1>
                <span>Some of my projects</span>
            </div>
            <ProjectsCards />
            <div className="section__tittle">
                <h1>Other Projects</h1>
            </div>
            <OtherProjects />
        </section>
    );
}

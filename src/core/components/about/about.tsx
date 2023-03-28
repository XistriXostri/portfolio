import { useState } from 'react';
import { Skills } from './skills';
import { TimeLane } from '../time.lane/time.lane';
import './about.css';
export function About() {
    const [showEducation, setShowEducation] = useState(true);

    return (
        <section id="aboutMe">
            <div className="section__tittle">
                <h1 className="">About me</h1>
                <span>Who i am</span>
                <div className="aboutMe__description">
                    <p>
                        <span>Frontend developer,</span> I love to create
                        websites that provide a unique and satisfying user
                        experience. You can see some of my projects in the{' '}
                        <a href="#myProjects">projects section.</a>
                        <br />
                        I am a self-taught person, responsible and committed to
                        my work. I am constantly learning new technologies and
                        tools to improve my skills.
                        <br />
                        If you have any questions or comments do not hesitate to{' '}
                        <a href="#contactMe">contact me.</a>
                    </p>
                </div>
            </div>
            <div className="section__tittle">
                <h1 className="">Skills</h1>
                <span>My knowledge</span>
                <Skills />
            </div>
            <div className="section__tittle">
                <h1 className="">My Background</h1>
                <span>Education and work</span>
                <div className="aboutMe__background">
                    <button
                        onClick={() => {
                            setShowEducation(true);
                        }}
                        className={`showEducation__button ${
                            showEducation
                                ? ''
                                : 'showEducation__button--disabled'
                        }`}
                    >
                        <img src="./icons/school.svg" alt="school hat" />
                        Eduación
                    </button>
                    <button
                        onClick={() => {
                            setShowEducation(false);
                        }}
                        className={`showEducation__button ${
                            showEducation
                                ? 'showEducation__button--disabled'
                                : ''
                        }`}
                    >
                        <img src="./icons/work.svg" alt="briefcase" />
                        Trabajo
                    </button>
                </div>
                <TimeLane showEducation={showEducation} />
            </div>
        </section>
    );
}

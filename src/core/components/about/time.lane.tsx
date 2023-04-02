const educationHistory = [
    {
        id: 1,
        title: 'Web Aplication Development',
        text: 'IES Caminás',
        date: 'September 2012 - June 2014',
    },
    {
        id: 2,
        title: 'Universidad Jaume I',
        text: 'Economy Degree',
        date: 'September 2016 - June 2022',
    },
    {
        id: 3,
        title: 'FrontEnd Development Bootcamp',
        text: 'ISDI Coders',
        date: 'October 2022 - February 2023',
    },
];
const workHistory = [
    {
        id: 1,
        title: 'Martí Asesores Tributarios',
        text: 'Assistant Administrator',
        date: 'October 2013 - January 2019',
    },
    {
        id: 2,
        title: 'Laurie Elizabeth Salvador',
        text: 'Assistant Administrator',
        date: 'March 2018 - September 2020',
    },
    {
        id: 3,
        title: 'La Nava Recechos',
        text: 'Assistant Administrator',
        date: 'March 2022 - July 2022',
    },
    {
        id: 4,
        title: 'Freelance',
        text: 'Frontend Developer',
        date: 'October 2020 - present',
    },
];
export function TimeLane({ showEducation }: { showEducation: boolean }) {
    return (
        <section className="timeLane">
            <ol>
                {(showEducation ? educationHistory : workHistory).map(
                    (item) => (
                        <li key={item.id}>
                            <div className="timeLane__spot">
                                <div className="timeLane__spot__icon">
                                    <img
                                        src="./icons/calendar.svg"
                                        alt="calendar"
                                    />
                                </div>
                                <div className="timeLane__spot__lane" />
                            </div>
                            <div className="timeLane__description">
                                <h1>{item.title}</h1>
                                <time>{item.date}</time>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    )
                )}
            </ol>
        </section>
    );
}

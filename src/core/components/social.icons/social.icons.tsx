const iconsList = [
    {
        id: 1,
        icon: <img src="./icons/github.svg" alt="github icon" />,
        href: 'https://github.com/XistriXostri',
        ariaLabel: 'github-icon',
        target: '_blank',
    },
    {
        id: 2,
        icon: <img src="./icons/linkedin.svg" alt="linkedin icon" />,
        href: 'https://www.linkedin.com/in/cristian-marti-iba%C3%B1ez/',
        ariaLabel: 'linkedin-icon',
        target: '_blank',
    },
    {
        id: 3,
        icon: <img src="./icons/email.svg" alt="email icon" />,
        href: '#contactame',
        ariaLabel: 'mail-icon',
    },
];

export const SocialIcons = () => {
    return (
        <>
            {iconsList.map((icon) => {
                return (
                    <li key={icon.id}>
                        <a
                            href={icon.href}
                            aria-label={icon.ariaLabel}
                            target={icon.target}
                            rel="noreferrer"
                        >
                            {icon.icon}
                        </a>
                    </li>
                );
            })}
        </>
    );
};

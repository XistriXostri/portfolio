import './stars.background.css';
export function StarsBackground({ children }: { children: JSX.Element }) {
    return (
        <section className="wrapper">
            <div id="stars"></div>
            <div id="stars2"></div>
            {children}
        </section>
    );
}

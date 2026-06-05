import "./Section.scss"

export function Section({ children, background = "transparent", className = "", id = "", sidePadding}) {
    return (
        <section className="section" style={{ background: background, paddingLeft: sidePadding, paddingRight: sidePadding }} id={id}>
            <div className={`section__wrapper ${className}`}>
                {children}
            </div>
        </section>
    );
}
import "./Section.scss"

export function Section({ children, background = "transparent", className = "", id = "", sidepadding}) {
    return (
        <section className="section" style={{ background: background, paddingLeft: sidepadding, paddingRight: sidepadding }} id={id}>
            <div className={`section__wrapper ${className}`}>
                {children}
            </div>
        </section>
    );
}
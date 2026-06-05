import "./SymbolSection.scss"

export function SymbolSection({ children, name = "section_name" }) {
    return (
        <section className="symbolSection">
            <h2 className="symbolSection__name">
                {name}
            </h2>
            <div className="symbolSection__symbolBoxes">
                {children}
            </div>
        </section>
    );
}
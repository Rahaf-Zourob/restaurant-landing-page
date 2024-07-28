import "./sectionDescription.module.css"
export default function SectionDescription({ description, children }) {
    return (
        <div>
            <p>{description}</p>
            {children}
        </div>
    )
}
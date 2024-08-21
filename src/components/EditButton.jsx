export default function EditButton({onClick, editing}) {
    return (
        <button className="btn-primary" onClick={onClick}>{editing? "SUBMIT": "EDIT"}</button>
    )
}
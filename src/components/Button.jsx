import { Children } from "react"

function Button({onClick, Children}) {
    return (
        <button onClick={onClick} className="btn btn-danger rounded-xl border border-[--accent-200] w-fit p-2 hover:bg-[--accent-200] " > {Children} </button>
    )
}

export default Button
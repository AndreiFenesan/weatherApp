import React from "react";
import "./FetchError.css"

interface errorProps {
    message: string
}

export default function FetchError({message}: errorProps): JSX.Element {
    return <div className={"error-container"}>{message}</div>
}
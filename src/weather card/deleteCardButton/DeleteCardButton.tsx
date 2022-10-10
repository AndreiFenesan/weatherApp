import React from "react";
import "./deleteCardButton.css"

interface props {
    deleteCardClickHandler: () => void

}

export default function DeleteCardButton({deleteCardClickHandler}: props): JSX.Element {
    return <button className={"delete-card-button"}
                   onClick={deleteCardClickHandler}>
        <img className={"delete-card-icon"} src={"https://cdn-icons-png.flaticon.com/128/864/864393.png"}
             alt={"Close icon"}/>
    </button>
}
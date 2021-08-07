import React, { Fragment } from "react";

export const Example = ({ count, listenTochildren }: { count?: number, listenTochildren: (event) => void } ) => {
    const childrendPass = () => {
        listenTochildren('truyen len')
    }
    return (
        <Fragment>
            <p onClick={childrendPass}>children</p>
            <h1>{count}</h1>
        </Fragment>
    )
}
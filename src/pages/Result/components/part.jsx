
import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../../../context'

const Part = (props) => {

    return (
            <div className="slick-container">
                <div className="slick-container__date">
                    {props.date}
                </div>
                <div className="slick-container__summary">
                    {props.total}
                </div>
                <div className="slick-container__risk">
                    {props.risk}
                </div>
            </div>
    )
}
export default Part
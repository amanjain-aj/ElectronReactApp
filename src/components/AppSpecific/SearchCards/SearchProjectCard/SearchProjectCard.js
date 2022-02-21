import React from 'react'
import { Link } from 'react-router-dom';

const SearchProjectCard = (props) => {

    const {
        serialLabel,
        serialValue,
        projectValue,
        projectStatus
    } = props

    return (
        <Link to={"/projectbudget"}>
            <div>
                <p className="d-flex float-end align-content-center align-items-center">
                    <span data-bs-toggle="tooltip" data-bs-placement="right"
                        title={projectStatus === "ongoing" ? "Ongoing" : projectStatus === "completed" ? "COMPLETED" : "CANCELLED"}
                        className={projectStatus === "ongoing" ? "cardOngoing float-end" : projectStatus === "completed" ? "cardCompleted float-end" : "cardCancelled float-end"}
                    >
                    </span>
                </p>
                <span className={'text-secondary'}>{serialLabel}: {serialValue}<hr className="hrBg" /></span>
                <p className={'h5 fw-bold text-uppercase'}>{projectValue}</p>
            </div>
        </Link>
    )
}

export default SearchProjectCard

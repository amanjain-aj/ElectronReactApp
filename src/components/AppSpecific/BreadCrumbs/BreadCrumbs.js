import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = (props) => {
    const {
        pathList = [{
            name: 'Home',
            path: 'home'
        }],

    } = props

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb mt-5">
                {
                    pathList.length > 0 ?
                        pathList.map((item, index) => {

                            return <Link to={`/${item.path}`} key={index}><li className={pathList.length === index + 1 ? "breadcrumb-item active fw-bold" : "breadcrumb-item"}>{pathList.length === index + 1 ? item.name : item.name + "/"}</li></Link>

                        }) : <></>
                }
            </ol>

        </nav>
    )
}

export default BreadCrumbs

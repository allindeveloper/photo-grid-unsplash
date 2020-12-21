import React from 'react'
import "./searchlabel.scoped.scss"

export const SearchLabel = ({value}) =>{
    return (
    <div style={{display:"inline-flex"}}><h3 className="search-label">Search Results for </h3>&nbsp;&nbsp;<h3 className="search-label-value"> {` "${value}"`}</h3></div>
    )
}
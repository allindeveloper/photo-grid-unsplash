import React from 'react'
import "./searchlabel.scoped.scss"

export const SearchLabel = ({value,loading}) =>{
    return (
    <div style={{display:"inline-flex"}}><h3 className="search-label">{loading ? 'Searching for': "Search Results for"} </h3>&nbsp;&nbsp;<h3 className="search-label-value"> {` “${value}”`}</h3></div>
    )
}
import React from 'react'
import {Helmet} from "react-helmet";

const Aux = (props) =>{
    return(
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#E53012"/>
                <title>{props.title}</title>
            </Helmet>
            {props.children}
        </>
    )
};

export default Aux;
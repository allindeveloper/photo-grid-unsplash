import React from 'react'
import TextInput from '../../components/Input/TextInput';
import "./home.scoped.scss"

class Home extends React.Component{

    constructor(props){
        super(props);
    }


    render(){

        return (
            <div className="jumbotron">
                <TextInput 
                placeholder="Search for Photo"
                />
            </div>
        )
    }
}
export default Home
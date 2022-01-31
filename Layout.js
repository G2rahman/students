import React, { useState } from 'react';
import Main from "./Main";
import Header from "./Header";
import './Layout.css'
function Layout(props){
    return (
        <div className="Layout">
            <Header/>
            <Main studentData={props.studentData}/>
        </div>
    );

}
export default Layout;

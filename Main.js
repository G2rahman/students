import React, { useState } from 'react';

import Student from './Student'
import './Main.css'

export default function Main(props){
    const [students, setStudents] = useState(props.studentData)
    return (
        <div className="Main">
            {students.map((student,index)=>{return <Student}
        </div>
    )
}

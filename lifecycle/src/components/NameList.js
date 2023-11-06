import React from "react";
import Person from "./Person";
function NameList(){
    const persons=[
        {
            id: 1,
            name: 'Amali',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Amal',
            age: 26,
            skill: 'Node'
        },
        {
            id: 3,
            name: 'Kamal',
            age: 20,
            skill: 'PHP'
        },
        {
            id: 4,
            name: 'Saman',
            age: 24,
            skill: 'HTML'
        },

    ]
    const personList = persons.map(person=><Person person={person}/>)
    return(
        <div>
            {
                personList
            }
        </div>
    )
}
export default NameList
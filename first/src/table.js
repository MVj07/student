import React from "react";
import "./table.css";

class Infotable extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div id='table'>
            <h3>Student Managment System</h3>
            <table>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Location</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Education</th>
                    <th>Action</th>
                    <th>Delete</th>
                </tr>
                    {
                        this.props.getData.length > 0 ?
                        (
                            this.props.getData.map(e=>
                                <tr key={e.id}>
                                    <td>{e.id}</td>
                                    <td>{e.fname}</td>
                                    <td>{e.lname}</td>
                                    <td>{e.location}</td>
                                    <td>{e.email}</td>
                                    <td>{e.dob}</td>
                                    <td>{e.education}</td>
                                    {/* <td>{e.about}</td> */}
                                    <td><button className="edit" onClick={event=>{this.props.setData(e)}}>Edit</button></td>
                                    <td><button className="delete" onClick={event=>{this.props.del(e)}}>Delete</button></td>
                                </tr>
                            )
                        ):(
                            <tr>
                                    <td>No Data</td>
                                </tr>
                        )
                    }
            </table>
            </div>
        )
    }
}
export default Infotable;
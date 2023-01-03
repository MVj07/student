import React from "react";
import "./form.css";

class InfoForm extends React.Component{
    constructor(){
        super();
        this.state={
            id:"",
            fname:"",
            lname:"",
            location:"",
            email:"",
            dob:"",
            education:"",
            about:"",
            isEdit:false
        }
    }
    infoChange=event=>{
        const {name,value}=event.target;
        this.setState({
            [name]:value
        })
    }
    infoSubmit=event=>{
        if(!this.state.isEdit){
            let data={
                isEdit:this.state.isEdit,
                fname:this.state.fname,
                lname:this.state.lname,
                location:this.state.location,
                email:this.state.email,
                dob:this.state.dob,
                education:this.state.education,
                about:this.state.about
            }
        }
        let data={
            isEdit:this.state.isEdit,
            id:this.state.id,
            fname:this.state.fname,
            lname:this.state.lname,
            location:this.state.location,
            email:this.state.email,
            dob:this.state.dob,
            education:this.state.education,
            about:this.state.about
        }
        this.props.myData(data);
        console.log(this.state.fname)
    }
    componentWillReceiveProps(props)
    {
        if(props.setForm.id !=null){
            this.setState({
                isEdit:true,
                id:props.setForm.id,
                fname:props.setForm.fname,
                lname:props.setForm.lname,
                location:props.setForm.location,
                email:props.setForm.email,
                dob:props.setForm.dob,
                education:props.setForm.education,
                about:props.setForm.about
            })
        }
    }
    render(){
        return(
            <form onSubmit={this.infoSubmit} autoComplete="off" id="form">
                <div>
                    <label>First Name:</label><br/>
                    <input type='text' name="fname" placeholder="Enter First Name..."
                    onChange={this.infoChange}
                    value={this.state.fname}
                    />
                </div>
                <div>
                    <label>Last Name:</label><br/>
                    <input type='text' name="lname" placeholder="Enter Last Name..."
                    onChange={this.infoChange}
                    value={this.state.lname}
                    />
                </div>
                <div>
                    <label>Location:</label><br/>
                    <input type='text' name="location" placeholder="Enter Location..."
                    onChange={this.infoChange}
                    value={this.state.location}
                    />
                </div>
                <div>
                    <label>Email:</label><br/>
                    <input type='text' name="email" placeholder="abc@gmail.com..."
                    onChange={this.infoChange}
                    value={this.state.email}
                    />
                </div>
                <div>
                    <label>Date of Birth:</label><br/>
                    <input type='text' name="dob" placeholder="yyyy-mm-dd"
                    onChange={this.infoChange}
                    value={this.state.dob}/>
                </div>
                <div>
                    <label>Education:</label><br/>
                    <input type='text' name="education" placeholder="Enter Education..."
                    onChange={this.infoChange}
                    value={this.state.education}/>
                </div>
                <div>
                    <label>About:</label><br/>
                    <textarea type='text' name="about"
                    onChange={this.infoChange}
                    value={this.state.about}/>
                </div>
                <div>
                <button type="submit" className="btn">{this.state.isEdit?'Update':'Submit'}</button>
                </div>
            </form>
        )
    }
}
export default InfoForm;
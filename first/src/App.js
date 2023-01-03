import React from "react";
import InfoForm from "./form";
import Infotable from "./table";
import axios from 'axios';
import "./student.css";


class App extends React.Component{
    constructor(){
        super();
        this.state={
            data:[],
            editData:[]
        }
    }
    create = data=>{
        if(!data.isEdit){
        axios.post("http://localhost:4000/create",data).then(res=>{
        this.getAll();
    })
}else{
    axios.put("http://localhost:4000/update",data).then(res=>{
    this.getAll();
})
}
    }
    getAll(){
        axios.get("http://localhost:4000/learners").then(res=>{
        this.setState({
            data:res.data
        })
    })
    }
    componentDidMount(){
        this.getAll();
    }
    update=data=>{
        console.log(data)
        this.setState({
            editData:data
        })
    }
   del=(data)=>{
    var option=window.confirm(`Are You Sure Want to Delete ${data.fname}`)
    if(option){
        axios.delete(`http://localhost:4000/delete/${data.id}`).then(res=>{
            console.log(res);
            this.getAll();
        })
    }
   }
    render(){
        return(
            <div>
                <div>
                    <div>
                        <InfoForm myData={this.create} setForm={this.state.editData}/>
                    </div>
                    <div>
                        <Infotable getData={this.state.data} setData={this.update} del={this.del}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;
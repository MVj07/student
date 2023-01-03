var express=require('express')
var app=express();
var cors=require('cors');
var mysql=require('mysql');


app.use(express.json())
app.use(cors());


app.listen(4000,function(err){
    if(err) throw err;
    console.log('server running')
});

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"johnydepp7&",
    database:"mydb"
});
// create method
app.post('/create',function(req,res){   
    const fname=req.body.fname
    const lname=req.body.lname
    const location=req.body.location
    const email=req.body.email
    const dob=req.body.dob
    const education=req.body.education
    const about=req.body.about
    
    con.query("insert into student (fname,lname,location,email,dob,education,about) values (?,?,?,?,?,?,?)",[fname,lname,location,email,dob,education,about],(err,result)=>{
        if(err)throw err;
        console.log(result);
    })
    res.json(fname,lname,location,email,dob,education,about)
    console.log(fname,lname,location,email,dob,education,about);
})
// read method
app.get('/learners',(req,res)=>{
    con.query('select * from student',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});


app.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    con.query('delete from student where id=?',id,(err,result,fields)=>{
        if(err)
        res.json('learner record deleted successfully');
        else
        console.log(result)
    })
});
app.put('/update',(req,res)=>{
    const id=req.body.id
    const fname=req.body.fname
    const lname=req.body.lname
    const location=req.body.location
    const email=req.body.email
    const dob=req.body.dob
    const education=req.body.education
    const about=req.body.about

    var sql=`update student set fname='${fname}',lname='${lname}',location='${location}',email='${email}',dob='${dob}',education='${education}',about='${about}' where id='${id}'`
    var values=[fname,lname,location,email,dob,education,about,id]
    con.query(sql,[values], (err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})




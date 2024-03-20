import { useState } from "react";

const Signup = () => {
    
    let [formObj,setFormObj] = useState({email:"",password:"",name:"",phone:""});

    let clickHandler = (e) => { //synthetic event e
        e.preventDefault();
        console.log("clicked!");
        console.log("*obj to be sent to server");
        console.log(formObj);
    }

    let onChangeHandler = (e) => { //synthetic event e
            //console.log(e.target.value);
            let myobj = {name:e.target.value};
            setFormObj({...formObj,[e.target.name]:e.target.value});
            //console.log(formObj);
    }
    
    return ( 

        <>
        <h1> SignUp </h1>
        <div className="d-flex justify-content-center">       

            <form>
  <div className="mb-6">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" name="email"  onChange={onChangeHandler}   className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-6">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input name="name" type="text" onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-6">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input name="password" type="password" onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-6">
    <label for="exampleInputPassword1" className="form-label">Phone</label>
    <input    name="phone" type="text" onChange={onChangeHandler} className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-6 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">I Accept Terms</label>
  </div>
  <button type="submit" onClick={clickHandler} class="btn btn-primary">Submit</button>
</form>




        </div>

        </>
     );
}
 
export default Signup;
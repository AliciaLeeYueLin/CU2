import { useState } from "react";

function ContactFormExercise (){
        // useState Variables here
        const [name, setName] = useState("");
        const [nameEntry, setNameEntry] = useState("abc"); 
        const [email, setEmail] =useState("")
        const [emailEntry, setEmailEntry] = useState(""); 
        const [message, setMessage] = useState("");
        const [messageEntry, setMessageEntry] = useState(""); 
    
        const submitForm = (e) => {
              e.preventDefault();
          
              //Make sure all the field are filled in
             if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Make sure the email is in the right format
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email');
    return;
  }


            setName([...name, nameEntry]);
            setEmail([...email, emailEntry]);
            setMessage([...message, messageEntry]);
            setNameEntry("");
            setMessageEntry("");
            setEmailEntry("");
        };
       

      
    return(
        <>
            <form onSubmit={submitForm}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" value={nameEntry} onChange={(event) => setNameEntry(event.target.value)} placeholder="Name" />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" value={emailEntry} onChange={(event) => setEmailEntry(event.target.value)} placeholder="Email"/>
      </div>

      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message</label>
            <textarea type="text" className="form-control" value={messageEntry} onChange={(event) => setMessageEntry(event.target.value)} placeholder="Leave a message..."/>
      </div>

<button className="btn btn-primary" >Submit</button>
     <h2>Name: {name}</h2>
              <h3>Email: {email}</h3>
              <p>Message: {message}</p>
     </form>
     
        </>
    )
}

export default ContactFormExercise
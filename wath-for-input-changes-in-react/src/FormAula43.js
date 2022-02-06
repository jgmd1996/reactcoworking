import React from "react";

export default function FormAula43() {
   const [formData, setFormData] = React.useState(
       {firstName: "", lastName: "", email: "", numero: ""}
   )
   console.log(formData)

   function handleChange(event) {
       setFormData(prevFormData => {
           return {
               ...prevFormData,
               [event.target.name]: event.target.value
           }
       })
   }

    return (
        <form>
            <input
            type="text"
            placeholder={"primeiro nome"}
            onChange={handleChange}
            name="firstName"
            value={formData.firstName}
            />
            <br/>
            <input
            type="text"
            placeholder={"Segundo nome"}
            onChange={handleChange}
            name="lastName"
            value={formData.lastName}
            />
            <br/>
            <input
            type="text"
            placeholder={"email"}
            onChange={handleChange}
            name="email"
            value={formData.email}
            />
            <br/>
            <input
            type="text"
            placeholder={"numero"}
            onChange={handleChange}
            name="numero"
            value={formData.numero}
            />
        </form>
    )
}
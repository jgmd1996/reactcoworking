import React from "react";

export default function FormAula41() {
   const [formData, setFormData] = React.useState(
       {firstName: "", lastName: ""}
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
            />
            <br/>
            <input
            type="text"
            placeholder={"Segundo nome"}
            onChange={handleChange}
            name="lastName"
            />
        </form>
    )
}
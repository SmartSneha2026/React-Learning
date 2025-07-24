import {useForm} from "react-hook-form"
import './App.css'

function App() {
  const {
    register,
    handleSubmit, 
    watch, 
    formState :{errors , isSubmitting,}
  } =useForm();
  
  async function onSubmit(data) {

    //API call kom simulate krte hai
     await new Promise((resolve) => setTimeout(resolve , 5000));
    console.log("Submittting the form" , data);
    alert("Form submitted Succesfully")
  }
  return (
    <form onSubmit = {handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="">First Name: </label>
        <input className={errors.firstName ? 'input-error' : ""}{...register("firstName" , 
          {required : true , 
          minLength:{value:3, message: "Min Length atleast 3" },
          maxLength:{value: 6, message: "max length atmost6"}
          })}/>
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />
      <div>
        <label htmlFor="">Middle Name: </label>
        <input  className={errors.middleName ?'input-error' : ""}{...register("middleName")} />
      </div>
      <br />
      <div>
        <label htmlFor="">last Name: </label>
        <input  className={errors.lastName ?'input-error' : ""} {...register("lastName" , 
          {
            pattern: {
              value : /^[A-Za-z]+$/i,
              message : "Last Name is not as per the rules"
            }
          })} />
          {errors.lastName && <p className='error-msg' >{errors.lastName.message}</p>}
      </div>
      <br /> 
      <input type="submit" disabled={isSubmitting}  value = {isSubmitting ? "Submitting" : "Submit" }/>
    </form>
  )
}

export default App

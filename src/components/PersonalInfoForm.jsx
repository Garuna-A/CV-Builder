import { useState } from "react";

function PersonalInfoForm({personalInfo,setPersonalInfo}){

    const[draft, setDraft] = useState(personalInfo);

    const handleChange = (field, value) =>{
        setDraft({...draft,[field]:value})
    };
    const handleSubmit=(e)=>{
        e.preventDefault()
        setPersonalInfo(draft)
    }
    return(

        <div class = 'section'>
            <h2>Personal Information</h2>
        <form onSubmit={handleSubmit}>
            <input type="text"
            placeholder="Name"
            value = {draft.name}
            onChange={(event)=> handleChange( 'name',event.target.value)} />
            <br />

            <input type="text"
            placeholder="Email"
            value = {draft.email}
            onChange={(event)=> handleChange( 'email',event.target.value)} />
            <br />

            <input type="text"
            placeholder="Phone"
            value={draft.phone}
            onChange={(event)=> handleChange( 'phone',event.target.value)} />
            <br />
            <button type="submit">Submit</button>
            <br /><br />
        </form>
        
        </div>
    )

}

export default PersonalInfoForm;
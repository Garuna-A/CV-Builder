import {  useState } from "react"

function WorkExperience({workExperience, setWorkExperience}){
    const[draft,setDraft] = useState([{...workExperience, responsibilities: workExperience.responsibilities || []}]);

    const[newResponsibility, setNewResponsibility] = useState([]);

    const handleChange = (index,field,value) =>{
        const updated = [...draft];
        updated[index][field] = value;
        setDraft(updated)
    };

    const handleNewResponsibilityChange = (index,value) => {
        const updated = [...newResponsibility];
        updated[index] = value;
        setNewResponsibility(updated);
    }

    const addDuty = (e,index) => {
        e.preventDefault()
        if(newResponsibility[index]?.trim() === "") return;

        const updated = [...draft];
        updated[index].responsibilities.push(newResponsibility[index]);
        setDraft(updated);

        const updatedNew = [...newResponsibility];
        updatedNew[index] = ""
        setNewResponsibility(updatedNew);
        
    }

    const addWork = (e) => {
        e.preventDefault();
        setDraft([...draft,{companyName:"",jobTitle:"",dateFrom:"",dateTo:"",responsibilities:[]}])

    }

    const removeItem = (entryIndex,responsibilityIndex) => {
        const updated = [...draft];
        updated[entryIndex].responsibilities.splice(responsibilityIndex,1);
        setDraft(updated);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setWorkExperience(draft)
    };

    return(

        <div class = 'section'>
            <h2 >Work Experience</h2>
            <form onSubmit={handleSubmit}>
                {draft.map((entry,index)=>(
                    <div key={index}>

                        <input type="text"
                        value = {entry.companyName}
                        placeholder="Company Name"
                        onChange={(event)=>handleChange(index,'companyName' , event.target.value)} />
                        <br />
        
                        <input type="text"
                        placeholder="Job Title"
                        value={entry.jobTitle}
                        onChange={(event)=>handleChange(index,'jobTitle',event.target.value)} />
                        <br />
        
                        <input type="text"
                        placeholder="Date From"
                        value={entry.dateFrom}
                        onChange={(event)=>handleChange(index,'dateFrom',event.target.value)} />
                        <br />
                        <input type="text"
                        placeholder="Date To"
                        value={entry.dateTo}
                        onChange={(event)=>handleChange(index,'dateTo',event.target.value)} />
                        <br />
        
                        
                        <textarea
                        placeholder="Responsibility"
                        value={newResponsibility[index]||""}
                        onChange={(event)=>handleNewResponsibilityChange(index,event.target.value)} />
                        <br />
                        <button onClick={(e)=>addDuty(e,index)}>Add Another Point</button>
                        <ul>
                        {entry.responsibilities.map((item, i) => (
                            <li key={i} onClick={()=>removeItem(index,i)} style={{cursor:"pointer"}}>{item}</li>
                        ))}
                        </ul>
                        <br />
                    </div>
                ))}

                

                <button className='add'onClick={addWork}>+</button>
                <br />
                <button type="submit">Submit</button>
                <br /><br />
            </form>
        </div>
    )
}

export default WorkExperience
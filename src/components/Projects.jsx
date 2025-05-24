import {  useState } from "react"

function Project({Project, setProject}){
    const[draft,setDraft] = useState([{...Project, responsibilities: Project.responsibilities || []}]);

    const[newpoint, setNewpoint] = useState([]);

    const handleChange = (index,field,value) =>{
        const updated = [...draft];
        updated[index][field] = value;
        setDraft(updated)
    };

    const handleNewpointChange = (index,value) => {
        const updated = [...newpoint];
        updated[index] = value;
        setNewpoint(updated);
    }

    const addDuty = (e,index) => {
        e.preventDefault()
        if(newpoint[index]?.trim() === "") return;

        const updated = [...draft];
        updated[index].responsibilities.push(newpoint[index]);
        setDraft(updated);

        const updatedNew = [...newpoint];
        updatedNew[index] = ""
        setNewpoint(updatedNew);
        
    }

    const addWork = (e) => {
        e.preventDefault();
        setDraft([...draft,{companyName:"",jobTitle:"",dateFrom:"",dateTo:"",responsibilities:[]}])

    }

    const removeItem = (entryIndex,pointIndex) => {
        const updated = [...draft];
        updated[entryIndex].responsibilities.splice(pointIndex,1);
        setDraft(updated);
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        setProject(draft)
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
                        placeholder="point"
                        value={newpoint[index]||""}
                        onChange={(event)=>handleNewpointChange(index,event.target.value)} />
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

export default Project
import { useState } from "react"


function EducationalExperience({educationalExperience, setEducationalExperience}){

    const[draft, setDraft] = useState([educationalExperience]);

    const handleChange = (index,field,value)=>{
        const updated = [...draft];
        updated[index][field]=value;
        setDraft(updated);
    };

    const handleAdd = (e) => {
        e.preventDefault();
        setDraft([...draft,{schoolName:"",degree:"",dateOfStudy:"",grade:""}]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setEducationalExperience(draft)
    };


    return(
        <div class='section'>
            <h2>Education</h2>
            <form onSubmit={handleSubmit}>
                {draft.map((entry,index)=>(
                    <div key={index} style={{marginBottom:'1rem'}}>

                        <input type="text"
                        placeholder="School Name"
                        value={entry.schoolName}
                        onChange={(event)=>handleChange(index,'schoolName', event.target.value)} 
                        />
                        <br />
    
                        <input type="text"
                        placeholder="Degree"
                        value={entry.degree}
                        onChange={(event)=>handleChange(index,'degree',event.target.value)} 
                        />
                        <br />
    
                        <input type="text"
                        placeholder="Graduation Date"
                        value={entry.dateOfStudy}
                        onChange={(event)=>handleChange(index,'dateOfStudy' ,event.target.value)} 
                        />
                        <br />
    
                        <input type="text"
                        placeholder="Grade"
                        value={entry.grade}
                        onChange={(event)=>handleChange(index, 'grade' , event.target.value)} 
                        />
                        <br />
                    </div>
                ))}

                <button className = 'add' onClick={handleAdd}>+</button>
                <br />
                <button type="submit">Submit</button>
                <br /><br />
            </form>
        </div>
    )
}

export default EducationalExperience
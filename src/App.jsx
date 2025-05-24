import { useState } from 'react'
import PersonalInfoForm from './components/personalInfoForm.jsx';
import WorkExperience from './components/workExperience.jsx';
import Project from './components/Projects.jsx';
import EducationalExperience from './components/EducationalExperience.jsx';
import phoneIcon from './assets/phone-call.png';
import mailIcon from './assets/email.png';
import './App.css'

function App(){
  const [personalInfo, setPersonalInfo] = useState({
    name : "Name",
    email : "abc@email.com",
    phone : "+91-1234-5678-21",
  });

  const[educationalExperience, setEducationalExperience] = useState([{
    schoolName: "ABC University",
    degree: "Bachelor's in ABC",
    dateOfStudy: "January 20xx",
    grade: "9.8/10"
  }]);

  const [workExperience, setWorkExperience] = useState([{
    companyName : "ABC Corp",
    jobTitle: "Job Title",
    dateFrom: "Jan 20xx",
    dateTo: "Dec 20xx",
    responsibilities: [],
  }])
  


  return(
    <div>

      <h1 id="heading">CV Application</h1>
    <div className="container">

      <div className="section">
        
        <PersonalInfoForm
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <EducationalExperience
          educationalExperience={educationalExperience}
          setEducationalExperience={setEducationalExperience}
        />
        <WorkExperience 
          workExperience = {workExperience}
          setWorkExperience = {setWorkExperience}
        />
      </div>
      



      <div className="resume">

        <div className="personalInfo">
          <div className="name">
            {personalInfo.name}
          </div>
          <div className="otherDetails">
            <div id="email">
              <img src={mailIcon} alt="Mail Icon" style={{width:'20px', height:'20px', verticalAlign:'middle', margin:'8px'}} />   
              <a href={`mailto:${personalInfo.email}`} style={{color:'black',textDecoration:'none'}}>{personalInfo.email}</a>

            </div>
            <div id="phone">
            <img src={phoneIcon} alt="Phone Icon" style={{width:'20px', height:'20px', verticalAlign:'middle', margin:'8px'}} />   
            <a href={`tel:${personalInfo.phone}`} style={{color:'black',textDecoration:'none'}}>{personalInfo.phone}</a>
            </div>
          </div>
        </div>

        <div className="education">
          <h2 id="education">Education</h2>
          <hr />
          {educationalExperience.map((entry,index)=>(
            <div className="eduList" key={index}>

              <div id="schoolNameAndGraduation">
                <div id="schoolName">
                  {entry.schoolName}
                </div>
                <div id="graduatedOn">
                  {entry.dateOfStudy}
                </div>            
              </div>
              <div id="degree">
                <em>{entry.degree}</em>
              </div>
              <div id="grade">
                <ul id='gradeList'>
                  <li>GPA: {entry.grade}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="WorkExperience">
          <h2 id="workExperience">Work Experience</h2>
          <hr />
          {workExperience.map((entry,index)=>(
            <div key={index}>
              
              <div id="companyNameAndWorkDate">
                <div id="companyName">
                  {entry.companyName}
                </div>
                <div id="workDate">
                  {entry.dateFrom}-{entry.dateTo}
                </div>
              </div>
              <div id="jobTitle">
                {entry.jobTitle}
              </div>
              <div id="responsibility">
                <ul>
                  {entry.responsibilities.map((item, idx)=>(
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                
              </div>
            </div>
          ))}
          
        </div>
      </div>
    </div>

      
      
    </div>

  )
}


export default App

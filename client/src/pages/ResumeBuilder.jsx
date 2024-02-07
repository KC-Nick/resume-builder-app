import { useState } from 'react';
import { userInfo } from 'login';

function ResumeInputForm() {
  const [resume, setResume] = useState('');

  const handleChange = (e) => {
    setResume(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resume);
  };

  return (
    <>


      <form onSubmit={handleSubmit}>
        <label>
          Resume:
          <div class="opener">
            <h5>Opening statement</h5>
            <p>Write a brief statement about yourself to catch the attention of potential employers.</p>
            <input type="text" id="opener" name="opener"></input>
          </div>
          <div class="skills">
            <h5>Skills</h5>
            <p>Enter your skills separated by commas.</p>
            <input type="text" id="skills" name="skills"></input>
          </div>
          <div class="experience">
            <h5>Experience</h5>
            <p>Enter your work experience.</p>
            <input type="text" id="experience" name="experience"></input>
          </div>
          <div class="education">
            <h5>Education</h5>
            <p>Enter your education.</p>
            <input type="text" id="education" name="education"></input>
          </div>
          <textarea value={resume} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
export default ResumeBuilder;
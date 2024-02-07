import { useState } from 'react';
import { Signup } from 'Signup';

function ResumeInputForm() {
  const [resume, setResume] = useState('');

  const handleChange = (e) => {
    setResume(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(resume);
  };

  const userEmail = Signup.email;

  return (
    <>
      <textarea value={resume} onChange={handleChange} />
      <form onSubmit={handleSubmit}>
        <label>Resume:</label>

        <div class="name">
          <h5>Name</h5>
          <p>Enter your name.</p>
          <input type="text" id="name" name="name" placeholder='...'></input>
        </div>

        <div class="email">
          <h5>Email</h5>
          <p>{Signup.email}</p>
        </div>

        <div class="phone">
          <h5>Phone</h5>
          <p>Enter your phone number.</p>
          <input type="text" id="phone" name="phone" placeholder='...'></input>
        </div>

        <div class="opener">
          <h5>Opening statement</h5>
          <p>Write a brief statement about yourself to catch the attention of potential employers.</p>
          <input type="text" id="opener" name="opener" placeholder='...'></input>
        </div>

        <div class="skills">
          <h5>Skills</h5>
          <p>Enter your skills separated by commas.</p>
          <input type="text" id="skills" name="skills" placeholder='...'></input>
        </div>

        <div class="experience">
          <h5>Experience</h5>
          <p>Enter your work experience.</p>
          <input type="text" id="experience" name="experience" placeholder='...'></input>
        </div>

        <div class="education">
          <h5>Education</h5>
          <p>Enter your education.</p>
          <input type="text" id="education" name="education" placeholder='...'></input>
        </div>

        <input type="submit" value="Submit" />

      </form>
    </>
  );
}
export default ResumeBuilder;
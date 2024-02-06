import { useState } from 'react';

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
    <form onSubmit={handleSubmit}>
      <label>
        Resume:
        <textarea value={resume} onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
export default UserInput;
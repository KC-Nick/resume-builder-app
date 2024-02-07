import { useState } from 'react';
import ResumeInputForm from '../pages/ResumeBuilder';
import ResumeForm from './ResumeForm';

const ResumeApp = ({ userId }) => {
    console.log(userId);
    const [resume, setResume] = useState({
        user: userId,
        name: '',
        email: '',
        phone: '',
        opener: '',
        skills: [{
          name: '',
          proficiency: ''
        }],
        experience: [],
        education: []
      });

  const onSubmit = (resumeData) => {
    // update the resume state with the new data
    setResume(resumeData);
  };

  return (
    <div>
      < ResumeInputForm resume={resume} setResume={setResume} onSubmit={onSubmit} />
      < ResumeForm resume={resume} setResume={setResume} />
    </div>
  );
};

export default ResumeApp;
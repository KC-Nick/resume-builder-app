import { useState } from 'react';
import ResumeInputForm from '../pages/ResumeBuilder';
import ResumeForm from '../pages/ResumeForm';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ResumeApp = ({ userId }) => {
  console.log("08", userId);
  const [resume, setResume] = useState({    
    user: userId || 'default',
    name: '',
    email: '',
    phone: '',
    opener: '',
    skills: [{
      name: '',
      proficiency: ''
    }],
    experience: [{
      jobTitle: '',
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      jobDescription: ''
    }],
    education: [{
      school: '',
      degree: '',
      fieldOfStudy: '',
      startYear: '',
      endYear: ''
    }]
  });

  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/home');
  };

  return (
    <>
      <ResumeForm resume={resume} setResume={setResume} user={{ userId }} />
      <Button variant="danger" type="button" onClick={handleCancelClick}>
        Cancel
      </Button>
    </>
  );
};

export default ResumeApp;
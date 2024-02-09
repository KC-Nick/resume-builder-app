import { useState } from 'react';
import ResumeInputForm from '../pages/ResumeBuilder';
import ResumeForm from '../pages/ResumeForm';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

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

  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/home');
  };

  const onSubmit = (resumeData) => {
    // update the resume state with the new data
    setResume(resumeData);
  };

  return (
    <>
      <ResumeForm resume={resume} setResume={setResume} />
      <Button variant="danger" type="button" onClick={handleCancelClick}>
        Cancel
      </Button>
    </>
  );
};

export default ResumeApp;
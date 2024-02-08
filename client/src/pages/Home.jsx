import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ResumeApp from '../components/ResumeApp';

const HomePage = ({ userId }) => {
  const navigate = useNavigate();

  const handleCreateResumeClick = () => {
    navigate('/create');
  };

  const handleViewResumesClick = () => {
    navigate('/resumes');
  };

  return (
    <Container>
      {isCreatingResume ? (
        <ResumeApp userId={userId} />
      ) : (
        <>
          <Button variant="primary" onClick={handleCreateResumeClick}>Create a Resume</Button>
          <Button variant="secondary" onClick={handleViewResumesClick}>View Resumes</Button>
        </>
      )}
    </Container>
  );
};

export default HomePage;
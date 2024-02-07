import { useState } from 'react';
import ResumeInputForm from '../pages/ResumeBuilder';
import ResumeForm from '../pages/ResumeForm';

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
    <Router>
      <Switch>
        <Route path="/create">
          <ResumeInputForm resume={resume} setResume={setResume} onSubmit={onSubmit} />
        </Route>
        <Route path="/generate">
          <ResumeForm resume={resume} setResume={setResume} />
        </Route>
      </Switch>
    </Router>
  );
};

export default ResumeApp;
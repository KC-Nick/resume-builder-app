import { Form, Button } from 'react-bootstrap';

const ResumeInputForm = ({ resume, setResume, onSubmit }) => {

  const handleChange = (e) => {
    let resumeObject;
    try {
      resumeObject = JSON.parse(e.target.value);
    } catch (error) {
      console.error("Invalid JSON input:", error);
      return;
    }

    setResume({
      ...resume,
      [e.target.name]: resumeObject,
    });
  };

  const handleCancelClick = () => {
    navigate('/home');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(resume);
  };

  const handlePhoneChange = (event) => {
    let input = event.target.value;
    let formattedInput = input.replace(/\D/g, '');

    if (formattedInput.length > 3) {
      formattedInput = `(${formattedInput.slice(0, 3)}) ${formattedInput.slice(3)}`;
    }
    if (formattedInput.length > 9) {
      formattedInput = `${formattedInput.slice(0, 9)}-${formattedInput.slice(9, 13)}`;
    }
    setResume({
      ...resume,
      phone: formattedInput,
    });
  };

  const handleExperienceChange = (e, index) => {
    const updatedExperiences = [...resume.experience];
    updatedExperiences[index][e.target.name] = e.target.value;
    setResume({ ...resume, experience: updatedExperiences });

  };

  const addExperience = () => {
    setResume({ ...resume, experience: [...resume.experience, { jobTitle: '', company: '', startDate: '', endDate: '', jobDescription: '' }] });
  };

  const handleEducationChange = (e, index) => {
    const updatedEducation = [...resume.education];
    updatedEducation[index][e.target.name] = e.target.value;
    setResume({ ...resume, education: updatedEducation });
  };

  const addEducation = () => {
    setResume({ ...resume, education: [...resume.education, { school: '', degree: '', fieldOfStudy: '', startYear: '', endYear: '' }] });
  };

  const handleSkillChange = (index, event) => {
    const values = [...resume.skills];
    values[index][event.target.name] = event.target.value;
    setResume({ ...resume, skills: values });
  };

  const addSkill = () => {
    setResume({ ...resume, skills: [...resume.skills, { name: '', proficiency: '' }] });
  };

  const resumeString = JSON.stringify(resume, null, 2);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="resume">
          <Form.Label>Resume:</Form.Label>
          <Form.Control as="textarea" value={resumeString} name="resume" onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" name="name" value={resume.name} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Enter your email" name="email" value={resume.email} onChange={handleChange} />
        </Form.Group>

        <Form.Group controlId="phone">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" name="phone" value={resume.phone} onChange={handlePhoneChange} />        </Form.Group>

        <Form.Group controlId="opener">
          <Form.Label>Opening statement</Form.Label>
          <Form.Control
            type="text"
            name="opener"
            value={resume.opener}
            placeholder="Write a brief statement about yourself to catch the attention of potential employers"
            onChange={handleChange}
          />
        </Form.Group>

        {resume.skills.map((skill, index) => (
          <Form.Group controlId={`skills${index}`} key={index}>
            <Form.Label>Skills {index + 1}</Form.Label>

            <Form.Group controlId={`skillName${index}`}>
              <Form.Label>Skill Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={skill.name}
                onChange={event => handleSkillChange(index, event)}
                placeholder="Skill name"
              />
            </Form.Group>

            <Form.Group controlId={`skillProficiency${index}`}>
              <Form.Label>Skill Proficiency</Form.Label>
              <Form.Select
                name="proficiency"
                value={skill.proficiency}
                onChange={event => handleSkillChange(index, event)}
              >
                <option value="">Select Proficiency</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </Form.Select>
            </Form.Group>
          </Form.Group>
        ))}

        <Button variant="primary" type="button" onClick={addSkill}>Add Skill</Button>

        {resume.experience.map((experience, index) => (
          <Form.Group controlId={`experience${index}`} key={index}>
            <Form.Label>Experience {index + 1}</Form.Label>

            <Form.Group>
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="Enter job title" name="jobTitle" value={experience.jobTitle} onChange={(e) => handleExperienceChange(e, index)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Company</Form.Label>
              <Form.Control type="text" placeholder="Enter company name" name="company" value={experience.company} onChange={(e) => handleExperienceChange(e, index)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" name="startDate" value={experience.startDate} onChange={(e) => handleExperienceChange(e, index)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" name="endDate" value={experience.endDate} onChange={(e) => handleExperienceChange(e, index)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Job Description</Form.Label>
              <Form.Control type="text" placeholder="Enter job description" name="jobDescription" value={experience.jobDescription} onChange={(e) => handleExperienceChange(e, index)} />
            </Form.Group>
          </Form.Group>
        ))}

        <Button onClick={addExperience}>Add Experience</Button>

        {resume.education.map((education, index) => (
          <Form.Group controlId={`education${index}`} key={index}>
            <Form.Label>Education {index + 1}</Form.Label>

            <Form.Group>
              <Form.Label>School</Form.Label>
              <Form.Control type="text" placeholder="Enter school" name="school" value={education.school} onChange={(e) => handleEducationChange(e, index)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Degree</Form.Label>
              <Form.Control type="text" placeholder="Enter degree" name="degree" value={education.degree} onChange={(e) => handleEducationChange(e, index)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Field of Study</Form.Label>
              <Form.Control type="text" placeholder="Enter field of study" name="fieldOfStudy" value={education.fieldOfStudy} onChange={(e) => handleEducationChange(e, index)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>Start Year</Form.Label>
              <Form.Control type="date" name="startYear" value={education.startYear} onChange={(e) => handleEducationChange(e, index)} />
            </Form.Group>

            <Form.Group>
              <Form.Label>End Year</Form.Label>
              <Form.Control type="date" name="endYear" value={education.endYear} onChange={(e) => handleEducationChange(e, index)} />
            </Form.Group>
          </Form.Group>
        ))}

        <Button onClick={addEducation}>Add Education</Button>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="danger" type="button" onClick={handleCancelClick}>
          Cancel
        </Button>
      </Form>
    </>
  );
}
export default ResumeInputForm;
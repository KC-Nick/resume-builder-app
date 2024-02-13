import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RESUME } from '../utils/mutations';
import ResumeInputForm from './ResumeBuilder';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';

const ResumeForm = ({ resume, setResume, userId }) => {
    const navigate = useNavigate();
    const [addResume, { error }] = useMutation(ADD_RESUME);
    const [isSubmitted, setIsSubmitted] = useState(true);

    const handleSubmit = async () => {
        setIsSubmitted(false);
        // console.log("resumeform", user._id);
        // console.log("resumeobj", resume);

        try {
            const { data } = await addResume({
                variables: {
                    // userId: user._id,
                    resume: {
                        education: resume.education,
                        email: resume.email,
                        experience: resume.experience,
                        name: resume.name,
                        opener: resume.opener,
                        phone: resume.phone,
                        skills: resume.skills.map(skill => ({
                            ...skill,
                            proficiency: skill.proficiency.toUpperCase(),
                        })),
                    },
                },
            });
            console.log("data", data);
            setResume(data.addResume);
            console.log("updatedresumestate");
            navigate(`/resume/${data.addResume.user.resume._id}`);
            console.log("update webpage");
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error adding resume:', error);
            setIsSubmitted(true);
        }
    };

    return (
        <div>
            {isSubmitted && <ResumeInputForm resume={resume} setResume={setResume} onSubmit={handleSubmit} />}

            {resume && (
                <PDFDownloadLink
                    document={
                        <Document>
                            <Page>
                                <Text>{resume.name}</Text>
                                <Text>{resume.email}</Text>
                                <Text>{resume.opener}</Text>
                                <Text>
                                    {resume.education.map((education) =>
                                        `${education.school}, ${education.degree}, ${education.fieldOfStudy}, ${education.startYear}-${education.endYear}`
                                    )}
                                </Text>
                                <Text>
                                    {resume.experience.map((experience) =>
                                        `${experience._id}, ${experience.jobTitle}, ${experience.company}, ${experience.position}, ${experience.startDate}-${experience.endDate}, ${experience.jobDescription}`
                                    )}
                                </Text>
                                <Text>
                                    {resume.skills.map((skills) =>
                                        `${skills.name}, ${skills.proficiency}`
                                    )}
                                </Text>
                            </Page>
                        </Document>
                    }
                    fileName="resume.pdf"
                >
                    {({ blob, url, loading, error }) =>
                        loading ? 'Loading document...' : 'Download resume'
                    }
                </PDFDownloadLink>
            )}
        </div>
    );
};

export default ResumeForm;
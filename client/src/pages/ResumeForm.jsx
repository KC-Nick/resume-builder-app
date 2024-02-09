import React from 'react';
import { useMutation } from '@apollo/client';
import { ADD_RESUME } from '../utils/mutations';
import ResumeInputForm from './ResumeBuilder';
import { PDFDownloadLink, Document, Page, Text } from '@react-pdf/renderer';
import { useNavigate } from 'react-router-dom';

const ResumeForm = ({ resume, setResume }) => {
    const navigate = useNavigate();
    const [addResume, { error }] = useMutation(ADD_RESUME);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addResume({
                variables: {
                    userId: resume.user,
                    resume: {
                        name: resume.name,
                        email: resume.email,
                        phone: resume.phone,
                        opener: resume.opener,
                        education: resume.education,
                        experience: resume.experience,
                        skills: resume.skills,
                    },
                },
            });

            setResume(data.addResume);
            navigate(`/resume/${data.addResume._id}`);
        } catch (error) {
            console.error('Error adding resume:', error);
        }
    };

    return (
        <div>
                <ResumeInputForm resume={resume} setResume={setResume} onSubmit={handleSubmit} />

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
                                        `${experience.jobTitle}, ${experience.company}, ${experience.startDate}-${experience.endDate}, ${experience.jobDescription}`
                                    )}
                                </Text>
                                <Text>
                                    {resume.skills.map((skill) =>
                                        `${skill.name}, ${skill.proficiency}`
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
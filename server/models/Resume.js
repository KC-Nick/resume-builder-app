const { Schema, model } = require('mongoose');
const EducationSchema = require('./Education');
const ExperienceSchema = require('./Experience');
const SkillSchema = require('./Skills');

const ResumeSchema = new Schema({
    opener: {
        type: String,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    education: [EducationSchema],
    experience: [ExperienceSchema],
    skills: [SkillSchema],
});

module.exports = model('Resume', ResumeSchema);
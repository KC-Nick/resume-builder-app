const { Schema, model } = require('mongoose');
const EducationSchema = require('./Education');
const ExperienceSchema = require('./Experience');
const SkillSchema = require('./Skill');

const ResumeSchema = new Schema({
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
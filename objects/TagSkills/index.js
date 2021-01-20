import React from 'react'
import { StyledTagSkills, StyledTagSkill } from './styles'

const printSkills = skills => skills.map((item, index) => <StyledTagSkill key={index}>{item}</StyledTagSkill>)

const TagSkills = ({ skills }) => <StyledTagSkills>{printSkills(skills)}</StyledTagSkills>

export default TagSkills

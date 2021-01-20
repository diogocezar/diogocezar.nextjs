import styled, { keyframes, css } from 'styled-components'

const Transition = css`
  transition: all 0.15s ease !important;
`

const appear = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`
const disappear = keyframes`
	from { opacity: 1; }
	to { opacity: 0; }
`

const time = '0.9s'

const baseAnimation = styled.div`
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
`

const MainAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const AboutAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const BlogAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const KeepInTouchAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const PortifolioAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const EducationalAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const NotFoundAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

export {
  MainAnimated,
  AboutAnimated,
  BlogAnimated,
  KeepInTouchAnimated,
  PortifolioAnimated,
  EducationalAnimated,
  NotFoundAnimated,
  Transition,
}

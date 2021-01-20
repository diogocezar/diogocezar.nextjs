import styled from 'styled-components'
import { devices } from '@/styles/devices'

const StyledSeparator = styled.header`
  width: 100%;
  border-bottom: 1px solid
    ${({ type }) => (type === 'orange' ? 'rgba(49, 36, 80, 0.36)' : 'rgba(153, 153, 153, 0.36)')};
  padding-bottom: 5px;
  margin-bottom: var(--size-s5);
  @media ${devices.laptop} {
    padding-bottom: 5px;
    margin-bottom: var(--size-s3);
  }
  h2 {
    color: var(--color-white);
    font-family: 'AGaramondPro';
    font-style: italic;
    font-weight: normal;
    font-size: 2rem;
    margin-bottom: 0px !important;
    @media ${devices.laptop} {
      font-size: 1.6rem;
    }
    span {
      font-family: 'AkzidenzGroteskBE';
      font-weight: bold;
      font-size: 2.5rem;
      font-style: normal;
      color: ${({ type }) => (type === 'orange' ? 'var(--color-purple-dark);' : 'var(--color-orange);')}!important;
      margin-right: 10px;
      @media ${devices.laptop} {
        font-size: 1.8rem;
      }
    }
  }
`

const StyledLineSeparator = styled.div`
  position: relative;
  float: left;
  width: 100%;
  margin-top: 30px;
  border-bottom: 1px solid
    ${({ type }) => (type === 'orange' ? 'rgba(49, 36, 80, 0.36)' : 'rgba(153, 153, 153, 0.36)')};
  padding-bottom: 5px;
  margin-bottom: var(--size-s5);
  @media ${devices.laptop} {
    padding-bottom: 5px;
    margin-bottom: var(--size-s3);
  }

`

export { StyledSeparator, StyledLineSeparator }

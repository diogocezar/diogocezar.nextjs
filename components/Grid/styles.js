import styled from 'styled-components'
import { devices } from '@/styles/devices'

const StyledCol4 = Col => styled(Col)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  border-right: 1px solid rgba(153, 153, 153, 0.1);
  &:last-child {
    border-right: none !important;
  }
  @media ${devices.laptop} {
    border-right: none !important;
    margin-bottom: var(--size-s2);
  }
`

const StyledCol2 = Col => styled(Col)``

const StyledCol1 = Col => styled(Col)``

const StyledRow = Row => styled(Row)`
  margin-bottom: ${({ bottom }) => bottom || 'var(--size-s6)'}!important;
  margin-top: ${({ top }) => top || '0px'}!important;
  @media ${devices.laptop} {
    margin-bottom: 0 !important;
  }
`

const StyledWrapperCol = styled.div`
  position: relative;
  float: left;
  text-align: center;
  @media ${devices.laptop} {
    margin-bottom: 50px !important;
  }
`

export {
  StyledCol4, StyledCol2, StyledCol1, StyledRow, StyledWrapperCol,
}

import React, { FC } from 'react'
import styled from '@emotion/styled'
import Typography from './components/Typography'
import theme from './styles/theme'

const ContainerBox = styled.div({
  paddingTop: '80px',
  paddingLeft: '80px',
  paddingRight: '83px',
})

const FlexBox = styled.div({
  display: 'flex',
})

const HugeTitleBold = styled.div({
  fontWeight: '700',
  fontSize: '60px',
})

const SubTitle = styled.span({
  fontStyle: 'normal',
  fontWeight: '600',
  fontSize: '13px',
  lineHeight: '22px',
  color: '#5856D6',
})
const Division = styled.div({
  borderBottom: '1px solid rgba(88,86,214,0.3)',
})
const SubTitleDiv = styled.div<{ width: string; marginLeft?: string }>(
  {
    marginLeft: '80px',
    marginTop: '40px',
  },
  (props) => ({
    width: props.width,
    marginLeft: props.marginLeft,
  }),
)

const Paragraph = styled.div<{ width: string; marginLeft: string }>`
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 12px;
  letter-spacing: 0.066px;
  color: #8e8e93;
  padding: 12px 0;
  width: ${(props) => props.width};
  margin-left: ${(props) => props.marginLeft};
`

function App() {
  return (
    <ContainerBox>
      <FlexBox>
        <HugeTitleBold>Typography</HugeTitleBold>
        <Paragraph width="320px" marginLeft="68px">
          This style is used only inside this design system, insn’t used inside
          iOS and isn’t described in the official Apple’s HIG (Human Interface
          Guidelines).
        </Paragraph>
        <Paragraph width="240px" marginLeft="238px">
          These styles are used inside iOS, but aren’t described in the official
          Apple’s HIG (Human Interface Guidelines).
        </Paragraph>
      </FlexBox>
      <FlexBox>
        <SubTitleDiv width="320px" marginLeft="0px">
          <SubTitle>BIG TITLES</SubTitle>
          <Division />
          <Typography
            fontWeight="400"
            fontSize="60px"
            lineHeight="70px"
            label="Huge Title"
            paddingTop="24px"
            themeId="red"
          />
          <Typography
            fontWeight="700"
            fontSize="60px"
            lineHeight="70px"
            label="Huge Title"
            paddingTop="8px"
            paddingBottom="40px"
          />
          <Typography
            fontWeight="400"
            fontSize="34px"
            lineHeight="41px"
            label="Large Title"
          />
          <Typography
            fontWeight="700"
            fontSize="34px"
            lineHeight="41px"
            paddingTop="8px"
            label="Large Title"
          />
        </SubTitleDiv>
        <SubTitleDiv width="120px">
          <SubTitle>TITLES</SubTitle>
          <Division />
          <Typography
            fontWeight="400"
            fontSize="28px"
            lineHeight="34px"
            label="Title 1"
            paddingTop="28px"
          />
          <Typography
            fontWeight="700"
            fontSize="28px"
            lineHeight="33px"
            label="Title 1"
            paddingTop="8px"
            paddingBottom="24px"
          />
          <Typography
            fontWeight="400"
            fontSize="22px"
            lineHeight="28px"
            label="Title 2"
          />
          <Typography
            fontWeight="700"
            fontSize="22px"
            lineHeight="28px"
            label="Title 2"
            paddingTop="8px"
            paddingBottom="24px"
          />
          <Typography
            fontWeight="700"
            fontSize="20px"
            lineHeight="28px"
            label="Title 3"
          />
          <Typography
            fontWeight="700"
            fontSize="20px"
            lineHeight="28px"
            label="Title 3"
            paddingTop="8px"
          />
        </SubTitleDiv>
        <SubTitleDiv width="120px">
          <SubTitle>HEADLINES</SubTitle>
          <Division />
          <Typography
            fontWeight="600"
            fontSize="17px"
            lineHeight="22px"
            label="Headline"
            paddingTop="24px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="600"
            fontSize="17px"
            fontStyle="italic"
            lineHeight="22px"
            label="Headline"
          />
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="21px"
            label="Callout"
            paddingTop="40px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="600"
            fontSize="16px"
            fontStyle="italic"
            lineHeight="21px"
            label="Callout"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="400"
            fontSize="16px"
            lineHeight="21px"
            fontStyle="italic"
            label="Callout"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="600"
            fontSize="16px"
            fontStyle="italic"
            lineHeight="21px"
            label="Callout"
          />

          <Typography
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            label="Subheadline"
            paddingTop="40px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="600"
            fontSize="15px"
            lineHeight="20px"
            label="Subheadline"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="400"
            fontSize="15px"
            lineHeight="20px"
            fontStyle="italic"
            label="Subheadline"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="600"
            fontSize="15px"
            lineHeight="20px"
            fontStyle="italic"
            label="Subheadline"
          />
        </SubTitleDiv>
        <SubTitleDiv width="80px">
          <SubTitle>BODY</SubTitle>
          <Division />
          <Typography
            fontWeight="400"
            fontSize="17px"
            lineHeight="22px"
            label="Body"
            paddingTop="24px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="600"
            fontSize="17px"
            lineHeight="22px"
            label="Body"
          />
          <Typography
            fontWeight="400"
            fontSize="17px"
            lineHeight="22px"
            label="Body"
            fontStyle="italic"
            paddingTop="8px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="600"
            fontSize="17px"
            lineHeight="22px"
            label="Body"
            fontStyle="italic"
          />

          <Typography
            fontWeight="400"
            fontSize="13px"
            lineHeight="16px"
            label="Footnote"
            paddingTop="40px"
            paddingBottom="10px"
          />
          <Typography
            fontWeight="600"
            fontSize="13px"
            lineHeight="16px"
            label="Footnote"
          />
          <Typography
            fontWeight="400"
            fontSize="13px"
            lineHeight="16px"
            fontStyle="italic"
            label="Footnote"
            paddingTop="10px"
            paddingBottom="10px"
          />
          <Typography
            fontWeight="600"
            fontSize="13px"
            lineHeight="16px"
            fontStyle="italic"
            label="Footnote"
          />
        </SubTitleDiv>
        <SubTitleDiv width="80px">
          <SubTitle>CAPTIONS</SubTitle>
          <Division />
          <Typography
            fontWeight="400"
            fontSize="12px"
            lineHeight="16px"
            label="Caption 1"
            paddingTop="24px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="500"
            fontSize="12px"
            lineHeight="16px"
            label="Caption 1"
          />
          <Typography
            fontWeight="400"
            fontSize="12px"
            lineHeight="16px"
            fontStyle="italic"
            label="Caption 1"
            paddingTop="8px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="500"
            fontSize="12px"
            lineHeight="16px"
            fontStyle="italic"
            label="Caption 1"
          />
          <Typography
            fontWeight="400"
            fontSize="11px"
            lineHeight="12px"
            label="Caption 2"
            paddingTop="24px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="600"
            fontSize="11px"
            lineHeight="13px"
            label="Caption 2"
          />
          <Typography
            fontWeight="400"
            fontSize="11px"
            lineHeight="13px"
            fontStyle="italic"
            label="Caption 2"
            paddingTop="8px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="600"
            fontSize="11px"
            lineHeight="13px"
            fontStyle="italic"
            label="Caption 2"
          />
          <Typography
            fontWeight="500"
            fontSize="10px"
            lineHeight="12px"
            fontStyle="italic"
            label="Caption 3"
            paddingTop="48px"
          />
        </SubTitleDiv>
        <SubTitleDiv width="80px">
          <SubTitle>RUBRICS</SubTitle>
          <Division />
          <Typography
            fontWeight="400"
            fontSize="15px"
            lineHeight="22px"
            label="Rubric 1"
            paddingTop="24px"
          />
          <Typography
            fontWeight="600"
            fontSize="15px"
            lineHeight="12px"
            label="Rubric 1"
            paddingTop="8px"
            paddingBottom="8px"
          />
          <Typography
            fontWeight="700"
            fontSize="15px"
            lineHeight="12px"
            label="Rubric 1"
          />
          <Typography
            fontWeight="400"
            fontSize="13px"
            lineHeight="18px"
            label="Rubric 2"
            paddingTop="24px"
          />
          <Typography
            fontWeight="600"
            fontSize="13px"
            lineHeight="22px"
            label="Rubric 2"
            paddingTop="12px"
            paddingBottom="12px"
          />
          <Typography
            fontWeight="700"
            fontSize="13px"
            lineHeight="22px"
            label="Rubric 2"
          />
          <Typography
            fontWeight="700"
            fontSize="17px"
            lineHeight="22px"
            label="Rubric 3"
            paddingTop="16px"
          />
          <Typography
            fontWeight="700"
            fontSize="11px"
            lineHeight="16px"
            label="Rubric 4"
            paddingTop="16px"
          />
          <Typography
            fontWeight="700"
            fontSize="9px"
            lineHeight="22px"
            label="Rubric 4"
            paddingTop="16px"
          />
        </SubTitleDiv>
      </FlexBox>
    </ContainerBox>
  )
}

export default App

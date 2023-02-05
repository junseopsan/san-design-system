import styled from '@emotion/styled'
import { Text } from '../components/Text'

// export default or export
// gray 영역.. 의식 영역으로 바꾼다.
const TypographyPage = () => {
  const ContainerBox = styled.div({
    paddingTop: '80px',
    paddingLeft: '80px',
    paddingRight: '83px',
  })

  const FlexBox = styled.div({
    display: 'flex',
  })

  const MainTitle = styled.div({
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

  const PaddingDiv = styled.div<{ padding: string }>({}, (props) => ({
    padding: props.padding,
  }))

  // 사용자가 어떻게 사용해야될지 모른다. 개발자가 찾는 시간이 들고. 인지부하가 걸린다.

  return (
    <ContainerBox>
      <FlexBox>
        <MainTitle>Typography</MainTitle>
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
          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="hugeTitle60">Huge Title</Text>
          </PaddingDiv>
          <Text typography="hugeTitle60Bold">Huge Title</Text>
          <PaddingDiv padding="40px 0 8px 0">
            <Text typography="largeTitle34">Large Title</Text>
          </PaddingDiv>
          <Text typography="largeTitle34Bold">Large Title</Text>
        </SubTitleDiv>
        <SubTitleDiv width="120px">
          <SubTitle>TITLES</SubTitle>
          <Division />
          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="titleOne28">Title 1</Text>
          </PaddingDiv>
          <Text typography="titleOne28Bold">Title 1</Text>
          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="titleTwo22">Title 2</Text>
          </PaddingDiv>
          <Text typography="titleTwo22Bold">Title 2</Text>
          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="titleThree20">Title 3</Text>
          </PaddingDiv>
          <Text typography="titleThree20Bold">Title 3</Text>
        </SubTitleDiv>
        <SubTitleDiv width="120px">
          <SubTitle>HEADLINES</SubTitle>
          <Division />
          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="headlines17SemiBold">Headline</Text>
          </PaddingDiv>
          <Text typography="headlines17SemiBoldItalic">Headline</Text>
          <PaddingDiv padding="40px 0 8px 0">
            <Text typography="callout16">Callout</Text>
          </PaddingDiv>
          <Text typography="callout16SemiBold">Callout</Text>
          <PaddingDiv padding="8px 0 8px 0">
            <Text typography="callout16Italic">Callout</Text>
          </PaddingDiv>
          <Text typography="callout16SemiBoldItalic">Callout</Text>
          <PaddingDiv padding="40px 0 8px 0">
            <Text typography="subheadline15">Subheadline</Text>
          </PaddingDiv>
          <Text typography="subheadline15SemiBold">Subheadline</Text>
          <PaddingDiv padding="8px 0 8px 0">
            <Text typography="subheadline15Italic">Subheadline</Text>
          </PaddingDiv>
          <Text typography="subheadline15SemiBoldItalic">Subheadline</Text>
        </SubTitleDiv>
        <SubTitleDiv width="80px">
          <SubTitle>BODY</SubTitle>
          <Division />
          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="body17">Body</Text>
          </PaddingDiv>
          <Text typography="body17SemiBold">Body</Text>
          <PaddingDiv padding="8px 0 8px 0">
            <Text typography="body17Italic">Body</Text>
          </PaddingDiv>
          <Text typography="body17SemiBoldItalic">Body</Text>

          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="footnote13">Footnote</Text>
          </PaddingDiv>
          <Text typography="footnote13SemiBold">Footnote</Text>
          <PaddingDiv padding="8px 0 8px 0">
            <Text typography="footnote13Italic">Footnote</Text>
          </PaddingDiv>
          <Text typography="footnote13SemiBoldItalic">Footnote</Text>
        </SubTitleDiv>
        <SubTitleDiv width="80px">
          <SubTitle>CAPTIONS</SubTitle>
          <Division />
          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="captions12">Caption 1</Text>
          </PaddingDiv>
          <Text typography="captions12SemiBold">Caption 1</Text>
          <PaddingDiv padding="8px 0 8px 0">
            <Text typography="captions12Italic">Caption 1</Text>
          </PaddingDiv>
          <Text typography="captions12SemiBoldItalic">Caption 1</Text>
          <PaddingDiv padding="40px 0 8px 0">
            <Text typography="captions11">Caption 2</Text>
          </PaddingDiv>
          <Text typography="captions11SemiBold">Caption 2</Text>
          <PaddingDiv padding="8px 0 8px 0">
            <Text typography="captions11Italic">Caption 2</Text>
          </PaddingDiv>
          <Text typography="captions11SemiBoldItalic">Caption 2</Text>
          <PaddingDiv padding="48px 0 0px 0">
            <Text typography="captions10SemiBold">Caption 3</Text>
          </PaddingDiv>
        </SubTitleDiv>
        <SubTitleDiv width="80px">
          <SubTitle>RUBRICS</SubTitle>
          <Division />
          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="rubric15">Rubric 1</Text>
          </PaddingDiv>
          <PaddingDiv padding="0px 0 8px 0">
            <Text typography="rubric15SemiBold">Rubric 1</Text>
          </PaddingDiv>
          <Text typography="rubric15Bold">Rubric 1</Text>
          <PaddingDiv padding="24px 0 8px 0">
            <Text typography="rubric13">Rubric 2</Text>
          </PaddingDiv>
          <PaddingDiv padding="0px 0 8px 0">
            <Text typography="rubric13SemiBold">Rubric 2</Text>
          </PaddingDiv>
          <Text typography="rubric13Bold">Rubric 2</Text>
          <PaddingDiv padding="16px 0 16px 0">
            <Text typography="rubric17Bold">Rubric 3</Text>
          </PaddingDiv>
          <PaddingDiv padding="0px 0 16px 0">
            <Text typography="rubric11Bold">Rubric 4</Text>
          </PaddingDiv>
          <PaddingDiv padding="0px 0 16px 0">
            <Text typography="rubric9Bold">Rubric 5</Text>
          </PaddingDiv>
        </SubTitleDiv>
      </FlexBox>
    </ContainerBox>
  )
}
export default TypographyPage

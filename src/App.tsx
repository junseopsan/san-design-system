import React, { FC } from 'react'
import styled from '@emotion/styled'

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

const SubTitleDiv = styled.div<{ width: string; marginLeft?: string }>(
    {
        borderBottom: '1px solid rgba(88,86,214,0.3)',
        marginLeft: '80px',
        marginTop: '40px',
    },
    (props) => ({
        width: props.width,
        marginLeft: props.marginLeft,
    })
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
                    This style is used only inside this design system, insn’t
                    used inside iOS and isn’t described in the official Apple’s
                    HIG (Human Interface Guidelines).
                </Paragraph>
                <Paragraph width="240px" marginLeft="238px">
                    These styles are used inside iOS, but aren’t described in
                    the official Apple’s HIG (Human Interface Guidelines).
                </Paragraph>
            </FlexBox>
            <FlexBox>
                <SubTitleDiv width="320px" marginLeft="0px">
                    <SubTitle>BIG TITLES</SubTitle>
                </SubTitleDiv>
                <SubTitleDiv width="120px">
                    <SubTitle>TITLES</SubTitle>
                </SubTitleDiv>
                <SubTitleDiv width="120px">
                    <SubTitle>HEADLINES</SubTitle>
                </SubTitleDiv>
                <SubTitleDiv width="80px">
                    <SubTitle>BODY</SubTitle>
                </SubTitleDiv>
                <SubTitleDiv width="80px">
                    <SubTitle>CAPTIONS</SubTitle>
                </SubTitleDiv>
                <SubTitleDiv width="80px">
                    <SubTitle>RUBRICS</SubTitle>
                </SubTitleDiv>
            </FlexBox>
        </ContainerBox>
    )
}

export default App

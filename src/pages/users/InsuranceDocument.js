import React from 'react';
import styled from "styled-components"
import {Container, HospitalText, SystemTitleText, BasicContainer} from "../../components/container/Container";

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

// 표 있는 페이지의 네이비 바
export const Bar = styled.div`
  border-radius: 12px;
  height: 60px;
  width: 100%;
  background-color: #2A3042;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1;
  display: flex;
  text-align: left;
  align-items: center;
  padding: 0 30px;
  justify-content: ${props => props.space ? 'space-between' : null};
`

export const BookedTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  font-size: 18px;
  position: absolute;
  top: 0;
  table-layout: fixed;
`

const ColumnContainer = styled.div`
  height: 40px;
  width: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  margin-right: 30px;
`

const TitleLabel = styled.label`
  color: #262DE0;
  font-size: 20px;
  width: 150px;
  min-width: 100px;
  text-align: left;
`

const InfoInput = styled.input.attrs({type: 'text'})`
  flex: 1;
  height: 20px;
  border-radius: 8px;
  border: 2px solid #E6E6E6;
  font-size: 20px;
  padding: 10px;
`

const MarginColumnContainer = styled(BasicContainer)`
  padding: 40px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
`
const MarginRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`

function InsuranceDocument() {

    return (
        <Container>
            <TitleContainer>
                <SystemTitleText> 보험 서류 청구 시스템 </SystemTitleText>
                <HospitalText>연세이비인후과의원</HospitalText>
            </TitleContainer>
            <BasicContainer>
                <Bar/>
                <MarginColumnContainer>
                    <MarginRowContainer>
                        <ColumnContainer>
                            <TitleLabel>성명</TitleLabel>
                            <InfoInput name='name'/>
                        </ColumnContainer>
                        <ColumnContainer>
                            <TitleLabel>질병분류기호</TitleLabel>
                            <InfoInput name='coe' />
                        </ColumnContainer>
                        <ColumnContainer>
                            <TitleLabel>진료기간</TitleLabel>
                            <InfoInput name='date' />
                        </ColumnContainer>
                    </MarginRowContainer>
                    <MarginRowContainer>
                        <ColumnContainer>
                            <TitleLabel>주민등록번호</TitleLabel>
                            <InfoInput name='personalId' />
                        </ColumnContainer>
                        <ColumnContainer>
                            <TitleLabel>영수증번호</TitleLabel>
                            <InfoInput name='receiptNum' />
                        </ColumnContainer>
                    </MarginRowContainer>
                    <MarginRowContainer>
                        <ColumnContainer>
                            <TitleLabel>진료비<br></br>세부산정내역</TitleLabel>
                        </ColumnContainer>
                    </MarginRowContainer>
                </MarginColumnContainer>
            </BasicContainer>
        </Container>
    );
}


export default InsuranceDocument;

import React from 'react';
import styled from "styled-components"
import {Container, HospitalText, SystemTitleText, BasicContainer} from "../../components/container/Container";
import SearchButtonImage from "../../images/SearchPlus.svg"
const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

// 표 있는 페이지의 네이비 바
const Bar = styled.div`
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

// const BookedTable = styled.table`
//   border-collapse: collapse;
//   width: 100%;
//   font-size: 18px;
//   position: absolute;
//   top: 0;
//   table-layout: fixed;
// `

const ColumnContainer = styled.div`
  height: 40px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 40px;
  margin-right: 30px;
`
const ShortColumnContainer = styled(ColumnContainer)`
  display: flex;
  width: 30%;
`

const TableColumnContainer = styled(ColumnContainer)`
  display: contents;
  width: 100%;
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
  justify-content: space-around;
`
const MarginRowContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const InfoTable = styled.table`
  width: 100%;
  margin: 0 0 40px 40px;
  border-collapse: collapse;
  border: 1px solid #959494;
  font-size: 17px;
`

const InfoTableData = styled.td`
  border: 1px solid #959494;
  height: 45px
`

const ManageAddButtonImage = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 12px;
  border: 1px dashed var(--gray-300, #FFF);
  margin-right: 10px;
`

const AddButtonContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: flex-end;
`

const ManageAddButton = styled.button`
  height: 100%;
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background: #414FCB;
  display: flex;
  align-items: center;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  cursor: pointer;
  font-size: 17px;
  color: white;
  white-space: nowrap;
`

function InsuranceDocument() {
    return (
        <Container>
            <TitleContainer>
                <SystemTitleText> 보험 서류 청구 시스템 </SystemTitleText>
                <HospitalText>연세이비인후과의원</HospitalText>
            </TitleContainer>
            <Bar/>
            <MarginColumnContainer>
                <MarginRowContainer>
                    <ShortColumnContainer>
                        <TitleLabel>성명</TitleLabel>
                        <InfoInput name='name'/>
                    </ShortColumnContainer>
                    <ShortColumnContainer>
                        <TitleLabel>질병분류기호</TitleLabel>
                        <InfoInput name='coe'/>
                    </ShortColumnContainer>
                    <ShortColumnContainer>
                        <TitleLabel>진료기간</TitleLabel>
                        <InfoInput name='date'/>
                    </ShortColumnContainer>
                </MarginRowContainer>
                <MarginRowContainer>
                    <ShortColumnContainer>
                        <TitleLabel>주민등록번호</TitleLabel>
                        <InfoInput name='personalId'/>
                    </ShortColumnContainer>
                    <ShortColumnContainer>
                        <TitleLabel>영수증번호</TitleLabel>
                        <InfoInput name='receiptNum'/>
                    </ShortColumnContainer>
                </MarginRowContainer>
                <MarginRowContainer>
                    <TableColumnContainer>
                        <TitleLabel>진료비<br></br>세부산정내역</TitleLabel>
                        <InfoTable>
                            <tr style={{backgroundColor: '#B1C9F9', border: '1px solid #959494', height: '45px'}}>
                                <th scope="col" style={{width: '7%', border: '1px solid #959494'}}>항목</th>
                                <th scope="col" style={{width: '10%', border: '1px solid #959494'}}>일자</th>
                                <th scope="col" style={{width: '10%', border: '1px solid #959494'}}>코드</th>
                                <th scope="col" style={{width: '26%', border: '1px solid #959494'}}>명칭</th>
                                <th scope="col" style={{width: '10%', border: '1px solid #959494'}}>금액</th>
                                <th scope="col" style={{width: '10%', border: '1px solid #959494'}}>본인부담금</th>
                                <th scope="col" style={{width: '10%', border: '1px solid #959494'}}>공단부담금</th>
                                <th scope="col" style={{width: '10%', border: '1px solid #959494'}}>전체본인부담</th>
                                <th scope="col" style={{width: '10%', border: '1px solid #959494'}}>비급여</th>
                            </tr>
                            <tr style={{border: '1px solid #959494', height: '45px'}}>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                            </tr>
                            <tr style={{border: '1px solid #959494', height: '45px'}}>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                            </tr>
                            <tr style={{border: '1px solid #959494', height: '45px'}}>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                            </tr>
                            <tr style={{border: '1px solid #959494', height: '45px'}}>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                            </tr>
                            <tr style={{border: '1px solid #959494', height: '45px'}}>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                            </tr>
                            <tr style={{border: '1px solid #959494', height: '45px'}}>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                            </tr>
                            <tr style={{border: '1px solid #959494', height: '45px'}}>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                                <InfoTableData>000</InfoTableData>
                            </tr>
                        </InfoTable>
                    </TableColumnContainer>
                </MarginRowContainer>
                <AddButtonContainer>
                    <ManageAddButton>
                        <ManageAddButtonImage src={SearchButtonImage}/>
                        보험서류청구
                    </ManageAddButton>
                </AddButtonContainer>
            </MarginColumnContainer>
        </Container>
    );
}


export default InsuranceDocument;

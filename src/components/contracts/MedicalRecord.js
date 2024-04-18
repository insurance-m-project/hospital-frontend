import axios from 'axios';

export async function addMedicalRecords(web3, account, inputValues, totalOop, totalPcc, totalFoop, nonReimbursement, initialTreatDetailList) {
    axios.post('http://localhost:4000/api/transaction', {
        from: account,
        name: inputValues.name,
        RRN: inputValues.RRN,
        KCD: inputValues.KCD,
        date: inputValues.date,
        receiptNumber: inputValues.receiptNumber,
        totalOop: totalOop,
        totalPcc: totalPcc,
        totalFoop: totalFoop,
        nonReimbursement: nonReimbursement,
        treatments: initialTreatDetailList
    }).then(async (response) => {

        console.log(response)
        await web3.eth.sendTransaction(response.data);
    }).catch((error) => {
        alert("정보가 보내지지 않았습니다 .");
        console.error('API 요청 중 오류 발생:', error);
    });
}

function MedicalRecord({web3, account}) {

};

export default MedicalRecord;
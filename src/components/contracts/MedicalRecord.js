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
        await web3.eth.sendTransaction(response.data, function(err, transactionHash) {
            if (!err) {
                console.log("Transaction Hash " + transactionHash);
                // 트랜잭션 해시를 사용하여 트랜잭션 확인하기
                web3.eth.getTransaction(transactionHash, function(err, transaction) {
                    if (!err) {
                        console.log("Transaction details:", transaction);
                    } else {
                        console.error("Error getting transaction details:", err);
                    }
                });
            } else {
                console.error("Error sending transaction:", err);
            }
        });
    }).catch((error) => {
        alert("정보가 보내지지 않았습니다 .");
        console.error('정보를 전달할 수 없습니다.', error);
    });



}

function MedicalRecord({web3, account}) {

};

export default MedicalRecord;
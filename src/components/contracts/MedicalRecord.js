import axios from 'axios';

const backendUrl = process.env.REACT_APP_ETHEREUM_NODE_URL;
export async function addMedicalRecords(web3, loggingWeb3, account, inputValues, totalOop, totalPcc, totalFoop, nonReimbursement, initialTreatDetailList) {
    axios.post(backendUrl+'/api/hospital', {
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
        const txReceipt = await web3.eth.sendTransaction(response.data, function(err, transactionHash) {
            if (!err) {
                console.log("Transaction details:", transactionHash);

            } else {
                console.error("Error getting transaction details:", err);
            }
        });
        console.log(txReceipt);
        const transactionHash = txReceipt.transactionHash;
        axios.post(backendUrl+'/api/logging', {
            from: account,
            transactionHash: transactionHash,
            date: new Date().toString()
        }).then(async (response) => {
            console.log(response)
            await loggingWeb3.eth.sendTransaction(response.data);
        }).catch((error) => {
            console.log(error);
        });

        alert("보험사로 데이터가 전송되었습니다.");
    }).catch((error) => {
        alert("정보가 보내지지 않았습니다 .");
        console.error('정보를 전달할 수 없습니다.', error);
    });
}

function MedicalRecord({web3, account}) {

};

export default MedicalRecord;
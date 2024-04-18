// import { useEffect, useState } from 'react';
// import CounterContract from '../../contracts/MedicalRecord.json';
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
        alert("정보가 보내지지 않았습니다 .")
        console.error('API 요청 중 오류 발생:', error);
    });
}

function MedicalRecord({web3, account}) {
    // const [deployed, setDeployed] = useState(null);
    //
    // const addMedicalRecord = async () => {
    //     await axios.post('http://localhost:4000/api/transaction', {
    //         from: account,
    //     }).then(async (response) => {
    //         await web3.eth.sendTransaction(response.data);
    //     }).catch((error) => {
    //         console.error('API 요청 중 오류 발생:', error);
    //     });
    // }
    //
    // useEffect(() => {
    //     (async () => {
    //         if (!account) return;
    //
    //         // networkId 가져오기
    //         const networkId = await web3.eth.net.getId();
    //         const CA = CounterContract.networks[networkId].address;
    //
    //         const abi = CounterContract.abi;
    //
    //         // Contract를 호출할 때 필요한 값들을 인자값으로 전달
    //         // 인자값 2개 , (abi, CA)
    //         const Deployed = new web3.eth.Contract(abi, CA); // 배포한 컨트랙트 정보 가져오기
    //         setDeployed(Deployed);
    //         const resultData = await Deployed.methods.getMedicalRecord('receipt123').call();
    //         console.log(resultData);
    //         // 이벤트 구독
    //         // 백그라운드에서 돌아가는 코드.
    //         /**
    //          * eth.subscribe() 인자값 2개
    //          * 1. 'logs' 이벤트 구독
    //          * 2. 어느 컨트랙트 안에 있는 로그를 가져올 것인가. (해당 컨트랙트 안에 있는 로그만 추적)
    //          */
    //         // subscribe() : 구독하겠다.
    //         // on() : 받겠다.
    //         // 'logs' 이벤트가 발동할 때마다 on()에 있는 콜백함수 발동
    //         web3.eth.subscribe('logs', {address: CA}).on('data', (log) => {
    //
    //             // decodeLog() 인자값
    //             // 1. 받아온 데이터를 어떤 형태로 파싱할 것인지
    //             //    type은 Solidity 쪽에서 선언한 타입 작성 (받는 쪽에서는 string으로 파싱)
    //             //    name은 이름을 지정해주는 것 (받을 이름)
    //             // 2. 파싱할 데이터
    //             const params = [{type: 'uint256', name: 'count'}];
    //             const value = web3.eth.abi.decodeLog(params, log.data); // 반환값 Object
    //             // emit 한 데이터가 여러개라면 반환값의 형태는 배열 안의 Object
    //             // 여러 데이터가 있을 경우 인덱스 혹은 지정한 name으로 구분
    //
    //         });
    //         // data : '0x0000000000000000000000000000000000000000000000000000000000000002'
    //         // uint256 공간 안에 count 상태변수 값만큼 넣어놓은 것
    //
    //     })();
    // }, []);

};

export default MedicalRecord;
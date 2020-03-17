const positionArray = ['le','vo','ce','da','vi'];

// 通常
function calcNormalMain() {
    let position = document.form1.position.value;
    let voStatus = getNumberById(position + 'Vo');
    let daStatus = getNumberById(position + 'Da');
    let viStatus = getNumberById(position + 'Vi');

    let otherVoStatus = 0;
    let otherDaStatus = 0;
    let otherViStatus = 0;
    for (let i = 0; i < positionArray.length; i++) {
        let otherPosition = positionArray[i];
        if (otherPosition != position) {
            otherVoStatus = otherVoStatus + getNumberById(otherPosition + 'Vo');
            otherDaStatus = otherDaStatus + getNumberById(otherPosition + 'Da');
            otherViStatus = otherViStatus + getNumberById(otherPosition + 'Vi');
        }
    }

    let voBaseValue = (2.0 * voStatus) + (0.5 * otherVoStatus);
    let daBaseValue = (2.0 * daStatus) + (0.5 * otherDaStatus);
    let viBaseValue = (2.0 * viStatus) + (0.5 * otherViStatus);

    let voMyBuff = getNumberById('voMyBuff');
    let daMyBuff = getNumberById('daMyBuff');
    let viMyBuff = getNumberById('viMyBuff');
    voMyBuff = (100 + voMyBuff) / 100;
    daMyBuff = (100 + daMyBuff) / 100;
    viMyBuff = (100 + viMyBuff) / 100;

    let appealCoefficient = Number(document.form2.appealCoefficient.value);
    let voFoundCoeff = Math.floor(voBaseValue * voMyBuff * appealCoefficient);
    let daFoundCoeff = Math.floor(daBaseValue * daMyBuff * appealCoefficient);
    let viFoundCoeff = Math.floor(viBaseValue * viMyBuff * appealCoefficient);

    let voMag = getNumberById('voMag');
    let daMag = getNumberById('daMag');
    let viMag = getNumberById('viMag');
    let voFesValue = Math.floor(voFoundCoeff * voMag);
    let daFesValue = Math.floor(daFoundCoeff * daMag);
    let viFesValue = Math.floor(viFoundCoeff * viMag);

    let voVoActualVal = document.getElementById('voVoActualVal');
    let voDaActualVal = document.getElementById('voDaActualVal');
    let voViActualVal = document.getElementById('voViActualVal');
    voVoActualVal.innerText = (voFesValue * 2.0) + '';
    voDaActualVal.innerText = daFesValue + '';
    voViActualVal.innerText = viFesValue + '';
    let daVoActualVal = document.getElementById('daVoActualVal');
    let daDaActualVal = document.getElementById('daDaActualVal');
    let daViActualVal = document.getElementById('daViActualVal');
    daVoActualVal.innerText = voFesValue + '';
    daDaActualVal.innerText = (daFesValue * 2.0) + '';
    daViActualVal.innerText = viFesValue + '';
    let viVoActualVal = document.getElementById('viVoActualVal');
    let viDaActualVal = document.getElementById('viDaActualVal');
    let viViActualVal = document.getElementById('viViActualVal');
    viVoActualVal.innerText = voFesValue + '';
    viDaActualVal.innerText = daFesValue + '';
    viViActualVal.innerText = (viFesValue * 2.0) + '';
}
// 思い出
function calcMemoriesMain() {
    let voStatus = getNumberById('ceVo');
    let daStatus = getNumberById('ceDa');
    let viStatus = getNumberById('ceVi');

    let otherVoStatus = 0;
    let otherDaStatus = 0;
    let otherViStatus = 0;
    for (let i = 0; i < positionArray.length; i++) {
        let otherPosition = positionArray[i];
        if (otherPosition != 'ce') {
            otherVoStatus = otherVoStatus + getNumberById(otherPosition + 'Vo');
            otherDaStatus = otherDaStatus + getNumberById(otherPosition + 'Da');
            otherViStatus = otherViStatus + getNumberById(otherPosition + 'Vi');
        }
    }

    let voBaseValue = (2.0 * voStatus) + (0.5 * otherVoStatus);
    let daBaseValue = (2.0 * daStatus) + (0.5 * otherDaStatus);
    let viBaseValue = (2.0 * viStatus) + (0.5 * otherViStatus);

    let voMyBuff = getNumberById('voMyBuff');
    let daMyBuff = getNumberById('daMyBuff');
    let viMyBuff = getNumberById('viMyBuff');
    voMyBuff = (100 + voMyBuff) / 100;
    daMyBuff = (100 + daMyBuff) / 100;
    viMyBuff = (100 + viMyBuff) / 100;
    let memBasicMag = Number(document.form5.ceMem.value);
    let orgBasicMag = 1 + Number(document.form3.leMem.value);
    orgBasicMag = orgBasicMag + Number(document.form4.voMem.value);
    orgBasicMag = orgBasicMag + Number(document.form6.daMem.value);
    orgBasicMag = orgBasicMag + Number(document.form7.viMem.value);
    let appealCoefficient = Number(document.form8.appealCoefficient.value);
    let voFesVale = Math.floor(Math.floor(Math.floor(voBaseValue * voMyBuff * appealCoefficient) * memBasicMag) * orgBasicMag);
    let daFesVale = Math.floor(Math.floor(Math.floor(daBaseValue * daMyBuff * appealCoefficient) * memBasicMag) * orgBasicMag);
    let viFesVale = Math.floor(Math.floor(Math.floor(viBaseValue * viMyBuff * appealCoefficient) * memBasicMag) * orgBasicMag);

    let voMemActualVal = (voFesVale * 2) + daFesVale + viFesVale;
    let daMemActualVal = voFesVale + (daFesVale * 2) + viFesVale;
    let viMemActualVal = voFesVale + daFesVale + (viFesVale * 2);

    let addVo = getNumberById('voAdd');
    let addDa = getNumberById('daAdd');
    let addVi = getNumberById('viAdd');
    if (addVo > 1) {
        addVo = addVo -1;
    } else {
        addVo = 0;
    }
    if (addDa > 1) {
        addDa = addDa -1;
    } else {
        addDa = 0;
    }
    if (addVi > 1) {
        addVi = addVi -1;
    } else {
        addVi = 0;
    }
    let addActualVo = Math.floor(Math.floor(voBaseValue * voMyBuff * appealCoefficient) * memBasicMag) * addVo;
    let addActualDa = Math.floor(Math.floor(daBaseValue * daMyBuff * appealCoefficient) * memBasicMag) * addDa;
    let addActualVi = Math.floor(Math.floor(viBaseValue * viMyBuff * appealCoefficient) * memBasicMag) * addVi;

    voMemActualVal = voMemActualVal + (addActualVo * 2) + addActualDa + addActualVi;
    daMemActualVal = daMemActualVal + addActualVo + (addActualDa * 2) + addActualVi;
    viMemActualVal = viMemActualVal + addActualVo + addActualDa + (addActualVi * 2);

    let voMem = document.getElementById('voMemActual');
    let daMem = document.getElementById('daMemActual');
    let viMem = document.getElementById('viMemActual');
    voMem.innerText = voMemActualVal + '';
    daMem.innerText = daMemActualVal + '';
    viMem.innerText = viMemActualVal + '';
}


function isReallyNaN(x) {
    // xがNaNであればtrue, それ以外ではfalse
    return x !== x;
}

function getNumberById(id) {
    let retNum = Number(document.getElementById(id).value);
    if (isReallyNaN(retNum)) {
        retNum = 0;
    }
    return retNum;
}

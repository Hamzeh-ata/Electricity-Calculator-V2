var prevRead,
  nowRead,
  prevReadNew,
  nowReadNew,
  sector,
  service,
  serviceNew,
  submit,
  fixedPrices,
  consumedWatts,
  reef,
  zeros,
  zerostemp1,
  reefValue,
  counterFee,
  TVFee,
  wasteFee,
  wasteFeeM,
  wasteFeeNew,
  finalBill,
  ConsumptionValue,
  ConsumptionValueNew,
  ServiceDays,
  ServiceDaysNew,
  serviceDayCalc,
  scrollButton,
  supported_unsupported,
  consumedWattsNew,
  finalBillNew,
  serviceDayCalcN;
  
counterFee = 200;
TVFee = 1000;
zeros = 1;
$("#submit-button").click(function () {
  //CreateElements();
  getInputValues();
  //CreateElements();
  $("#old-result").show();
  consumedWatts = nowRead - prevRead;
  serviceDayCalc = consumedWatts / ServiceDays;
  if (ServiceDays.length == 0 || ServiceDays <= 0) {
    serviceDayCalc = 0;
  }
  countrySideCalc(consumedWatts);
  fixedPrices = TVFee + counterFee + reefValue;
  wasteFeeCalc(consumedWatts);
  ConsumptionCalc(consumedWatts);
  if (service == 2) {
    wasteFee = 0;
  }
  finalBill = fixedPrices + wasteFee + ConsumptionValue;
  ValueSetOld();
});

$("#submit-button-new").click(function () {
  getInputValuesNew();
  $("#input-result-new").show();
  consumedWattsNew = nowReadNew - prevReadNew;
  serviceDayCalcN = consumedWattsNew / ServiceDaysNew;
  if (ServiceDaysNew.length == 0 || ServiceDaysNew <= 0) {
    serviceDayCalcN = 0;
  }
  supoortedWattsCalc(consumedWattsNew);
  wasteFeeCalc(consumedWattsNew);
  countrySideCalc(consumedWattsNew);
  fixedPrices = TVFee + counterFee + reefValue;

  if (serviceNew == 2) {
    wasteFee = 0;
  }

  finalBillNew = fixedPrices + wasteFee + ConsumptionValueNew;
  

  console.log(fixedPrices);
 

  ValueSetNew();
});

function countrySideCalc(Watts) {
  var leng = Watts.toString().length;
  if (Watts <= 999) {
    for (let i = 0; i < leng; i++) {
      zeros += "0";
    }
    zerostemp1 = parseInt(zeros);
    //console.log(zerostemp1);
    //reefValue=Watts/zerostemp1;
    reefValue = Watts;
  
  } else if (Watts >= 1000) {
    var toText = Watts.toString();
    var lastChar = toText.slice(-1);
    var lastDight = +lastChar;
    /*if(lastDight==0){
        console.log(lastDight);
        reefValue=(input1/1000)*1000;
        console.log(reefValue.toFixed(3));

    }*/
    //  reefValue=Watts/1000;
    reefValue = Watts;
   
  }
  zeros = 1;
  return reefValue;
}
function wasteFeeCalc(Watts) {
  if (Watts > 200) {
    wasteFeeM = (Watts - 200) * 5;
    wasteFee = 1666 + wasteFeeM;
  } else {
    wasteFee = 1666;
  }

}
function ConsumptionCalc(Watts) {
  if (Watts <= 160) {
    ConsumptionValue = Watts * 33;
    console.log(ConsumptionValue);
  } else if (Watts >= 161 && Watts <= 300) {
    ConsumptionValue = 160 * 33 + (Watts - 160) * 72;
    console.log("Watts" + ConsumptionValue);
  } else if (Watts >= 301 && Watts <= 500) {
    ConsumptionValue = 160 * 33 + 140 * 72 + (Watts - 300) * 86;
    console.log("Watts" + ConsumptionValue);
  } else if (Watts >= 501 && Watts <= 600) {
    ConsumptionValue = 160 * 33 + 140 * 72 + 200 * 86 + (Watts - 500) * 114;
    console.log("Watts" + ConsumptionValue);
  } else if (Watts >= 601 && Watts <= 750) {
    ConsumptionValue =
      160 * 33 + 140 * 72 + 200 * 86 + 100 * 114 + (Watts - 600) * 158;
    console.log("Watts" + ConsumptionValue);
  } else if (Watts >= 750 && Watts <= 1000) {
    ConsumptionValue =
      160 * 33 +
      140 * 72 +
      200 * 86 +
      100 * 114 +
      150 * 158 +
      (Watts - 750) * 188;
    console.log("Watts" + ConsumptionValue);
  } else if (Watts > 1000) {
    ConsumptionValue =
      160 * 33 +
      140 * 72 +
      200 * 86 +
      100 * 114 +
      150 * 158 +
      250 * 188 +
      (Watts - 1000) * 265;
    console.log("Watts" + ConsumptionValue);
  }
}
/*function CreateElements (){
    $("#R1").append('<div class="col-sm-6 col-md-12 col-lg-6" id="col2"><div class="title"><h1>All information about this counter</h1></div></div>');
    $("#col2").append('<div class="info"><div class="info-label"><label class="label2"><h4>Finall bill </h4><input readonly id="finallBill"></label></div></div>');
    $("#col2").append('<div class="info"><div class="info-label"><label class="label2"><h4>Consumed watts </h4><input readonly id="Consumed"></label></div></div>');
    $("#col2").append('<div class="info"><div class="info-label"><label class="label2"><h4>Watts per day</h4><input readonly id="wattsDay"></label></div></div>');
    $("#col2").append('<div class="info"><div class="info-label"><label class="label2"><h4>Consumption value</h4><input readonly id="Consumption-value"></label></div></div>');
}*/
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    $("#scrollToTop").css("display", "flex");
    $("#scrollToTop").css("justify-content", "center");
    $("#scrollToTop").css("align-content", "center");
  } else {
    $("#scrollToTop").css("display", "none");
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function getInputValues() {
  prevRead = $("#prev-read").val();
  nowRead = $("#now-read").val();
  ServiceDays = $("#Service-days").val();
  sector = $("#select").find(":selected").text();
  /*if($("#select").val()==1){
    };*/
  service = $("input[name=Service]:checked").val();
}
function getInputValuesNew() {
  supported_unsupported = $("input[name=support]:checked").val();
  prevReadNew = $("#prev-read-new").val();
  nowReadNew = $("#now-read-new").val();
  serviceNew = $("input[name=Service-new]:checked").val();
  ServiceDaysNew=$("#Service-days-new").val();
}

function ValuesCalc() {}
function ValueSetOld() {
  $("#wattsDay").val(serviceDayCalc.toFixed(2));
  $("#Consumed").val(consumedWatts);
  $("#waste-value").val(wasteFee / 1000);
  $("#finallBill").val(finalBill / 1000);
  $("#Consumption-value").val(ConsumptionValue / 1000);
}
function ValueSetNew() {
  $("#Consumption-value-new").val(ConsumptionValueNew / 1000);
  $("#Consumed-new").val(consumedWattsNew);
  $("#Waste-value-new").val(wasteFee / 1000);
  $("#finallBill-new").val(finalBillNew/ 1000);
  $("#wattsDay-new").val(serviceDayCalcN.toFixed(2));

}
function supoortedWattsCalc(Watts) {
  if (supported_unsupported == 1) {
    if (Watts >= 001 && Watts <= 300) {
      ConsumptionValueNew = Watts * 50;
    } else if (Watts >= 301 && Watts <= 600) {
      ConsumptionValueNew = 300 * 50 + (Watts - 300) * 100;
    } else if (Watts > 600) {
      ConsumptionValueNew = 300 * 50 + 300 * 100 + (Watts - 600) * 200;
    }
    if(Watts>=51 && Watts<=200){
        ConsumptionValueNew=(ConsumptionValueNew-2500);
    }
    if(Watts>=201 && Watts<601){
        ConsumptionValueNew=(ConsumptionValueNew-2000);
    }
  }
  else if(supported_unsupported == 2){
      if(Watts>=001 && Watts<=1000){
        ConsumptionValueNew = Watts * 120;
      }
      else if(Watts >= 1001){
        ConsumptionValueNew=1000*120+(Watts-1000) * 150;
      }
  }








































































































































































  
}

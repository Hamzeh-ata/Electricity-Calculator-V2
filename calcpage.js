var prevRead,nowRead,sector,service,submit,fixedPrices,consumedWatts,reef,zeros,zerostemp1,reefValue,counterFee,TVFee,wasteFee,wasteFeeM,finalBill,ConsumptionValue,ServiceDays,serviceDayCalc,scrollButton;
counterFee=200;
TVFee=1000;
zeros=1;
$("#submit-button").click(function(){
getInputValues();
//CreateElements();
$("#old-result").show();
consumedWatts=nowRead-prevRead;
serviceDayCalc=consumedWatts/ServiceDays;
if(ServiceDays.length==0||ServiceDays<=0){
    serviceDayCalc=0;
}
$("#wattsDay").val(serviceDayCalc.toFixed(2));
$("#Consumed").val(consumedWatts);
countrySideCalc(consumedWatts);
fixedPrices=TVFee+counterFee+reefValue;
wasteFeeCalc(consumedWatts);
ConsumptionCalc(consumedWatts);
if(service==2){
    wasteFee=0;
}
$("#waste-value").val(wasteFee/1000);
finalBill=fixedPrices+wasteFee+ConsumptionValue;
$("#finallBill").val(finalBill/1000);
$("#Consumption-value").val(ConsumptionValue/1000);
});
function countrySideCalc(Watts){
var leng=Watts.toString().length;
if(Watts<=999){
    for(let i=0;i<leng; i++){
        zeros+="0";
        };
        zerostemp1=parseInt(zeros);
//console.log(zerostemp1);
//reefValue=Watts/zerostemp1;
reefValue=Watts;
console.log(reefValue);
}
else if(Watts>=1000){
    var toText=Watts.toString();
    var lastChar=toText.slice(-1);
    var lastDight=+(lastChar);
    /*if(lastDight==0){
        console.log(lastDight);
        reefValue=(input1/1000)*1000;
        console.log(reefValue.toFixed(3));

    }*/
      //  reefValue=Watts/1000;
      reefValue=Watts;
    console.log(reefValue);
};
zeros=1;  
return reefValue;
};
function wasteFeeCalc(Watts){
    if(Watts>200){
        wasteFeeM=(Watts-200)*5;
        wasteFee=1666+wasteFeeM;
    }
    else {
        wasteFee=1666;
    }
    console.log(wasteFee);
}
function ConsumptionCalc(Watts){
    if(Watts<=160){
        ConsumptionValue=Watts*33;
        console.log(ConsumptionValue);
    }
    else if (Watts>=161 && Watts<=300){
        ConsumptionValue=(160*33)+((Watts-160)*72);
        console.log("Watts" + ConsumptionValue);
    }
    else if (Watts>=301 && Watts<=500){
        ConsumptionValue=(160*33)+(140*72)+((Watts-300)*86);
        console.log("Watts" + ConsumptionValue);

    }
    else if (Watts>=501 && Watts<=600){
        ConsumptionValue=(160*33)+(140*72)+(200*86)+((Watts-500)*114);
        console.log("Watts" + ConsumptionValue);
    }
    else if (Watts>=601 && Watts<=750){
        ConsumptionValue=(160*33)+(140*72)+(200*86)+(100*114)+((Watts-600)*158);
        console.log("Watts" + ConsumptionValue);

    }
    else if (Watts>=750 && Watts<=1000){
        ConsumptionValue=(160*33)+(140*72)+(200*86)+(100*114)+(150*158)+((Watts-750)*188);
        console.log("Watts" + ConsumptionValue);
    }
    else if (Watts>1000){
        ConsumptionValue=(160*33)+(140*72)+(200*86)+(100*114)+(150*158)+(250*188)+((Watts-1000)*265);
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
window.onscroll=function() {scrollFunction()
    console.log(document.body.scrollTop);

}
function scrollFunction(){
    if(document.body.scrollTop > 10 || document.documentElement.scrollTop > 10){
     $("#scrollToTop").css("display","flex");
     $("#scrollToTop").css("justify-content","center");
     $("#scrollToTop").css("align-content","center");

    }
    else {
        $("#scrollToTop").css("display","none");

    }
}
function topFunction(){
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
}
function getInputValues(){
    prevRead=$("#prev-read").val();
    nowRead=$("#now-read").val();
    ServiceDays=$("#Service-days").val();
    sector=$("#select").find(":selected").text();
    /*if($("#select").val()==1){
    };*/
    service=$('input[name=Service]:checked').val();
}
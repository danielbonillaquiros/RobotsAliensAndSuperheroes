var fitCalc;

function requestFitCalc() {
  var arm = $("#arm").val();
  var bikeType = $("#bikeType").val();
  var forearm = $("#forearm").val();
  var gender = $("#gender").val();
  var inseam = $("#inseam").val();
  var lowerLeg = $("#lowerLeg").val();
  var overallHeight = $("#overallHeight").val();
  var sternalNotch = $("#sternalNotch").val();
  var thigh = $("#thigh").val();
  var trunk = $("#trunk").val();
  var unit = $("#unit").val();

  var sendInfo = {
    arm: arm,
    bikeType: bikeType,
    forearm: forearm,
    gender: gender,
    inseam: inseam,
    lowerLeg: lowerLeg,
    overallHeight: overallHeight,
    sternalNotch: sternalNotch,
    thigh: thigh,
    trunk: trunk,
    unit: unit
  };
  var url = "/public/fitcalculator/fit";

  fitCalc = $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(sendInfo),
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    success: function (msg) {
      if (msg) {
        console.info("Fit calculation succeeded!");
      } else {
        console.error("There was an error with the fit calculation!");
      }
    }
  });
}

function requestProduct() {
  $.getJSON( "http://hackathon.backcountry.com:8081/hackathon/public/product/v1/products/" + $("#product").val() + "?callback=?", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
  });
}

function requestBike() {
  var sendInfo = "_dyncharset=UTF-8&%2Fbackcountry%2Fcatalog%2Fbikebuilder%2Fformhandler%2FBikeBuilderFormHandler.frameSkuId=PIN000M&_D%3A%2Fbackcountry%2Fcatalog%2Fbikebuilder%2Fformhandler%2FBikeBuilderFormHandler.frameSkuId=+&%2Fbackcountry%2Fcatalog%2Fbikebuilder%2Fformhandler%2FBikeBuilderFormHandler.useMockResponse=false&_D%3A%2Fbackcountry%2Fcatalog%2Fbikebuilder%2Fformhandler%2FBikeBuilderFormHandler.useMockResponse=+&_D%3A%2Fbackcountry%2Fcatalog%2Fbikebuilder%2Fformhandler%2FBikeBuilderFormHandler.getCompatibleGruppos=+&_DARGS=%2FStore%2Fcatalog%2Finclude%2FbikeBuilderInit.jsp.ajaxform-getGruppos&%2Fbackcountry%2Fcatalog%2Fbikebuilder%2Fformhandler%2FBikeBuilderFormHandler.getCompatibleGruppos=";
  var url = "/public/compcyclist";

  $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(sendInfo),
    dataType: "json",
    contentType: 'application/json;charset=UTF-8',
    success: function (msg) {
      if (msg) {
        console.info("Request bike succeeded!");
      } else {
        console.error("There was an error fetching bike info!");
      }
    }
  });
}

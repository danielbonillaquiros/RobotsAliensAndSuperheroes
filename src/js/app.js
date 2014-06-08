function requestFitCalc(fitCalc) {
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

  var temp = $.ajax({
    type: "POST",
    url: url,
    data: JSON.stringify(sendInfo),
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    success: function (msg) {
      if (msg) {
        fitCalc = temp;
        console.info("Fit calculation succeeded!");
      } else {
        console.error("There was an error with the fit calculation!");
      }
    }
  });
}

function requestProduct(product) {
  var product_id = $("#product").val();
  var url = "http://hackathon.backcountry.com:8081/hackathon/public/product/v1/products/" + product_id + "?callback=?";

  var temp = $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: function (msg) {
      if(msg) {
        product = temp.responseJSON.products[0];
        console.info("Request product succeeded!");
      } else {
        console.error("There was an error fetching product info!");
      }
    }
  });
}

function pushProduct(product_id, product_array) {
  var url = "http://hackathon.backcountry.com:8081/hackathon/public/product/v1/products/" + product_id + "?callback=?";

  var temp = $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    success: function (msg) {
      if(msg) {
        product_array.push(temp.responseJSON.products[0]);
        console.info("Request product succeeded!");
      } else {
        console.error("There was an error fetching product info!");
      }
    }
  });
}

function requestBike(bike_) {
  var part_id = $("#part_id").val();
  var sendInfo = "_dyncharset=UTF-8&/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.frameSkuId=" + part_id + "&_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.frameSkuId=+&/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.useMockResponse=false&_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.useMockResponse=+&_D:/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.getCompatibleGruppos=+&_DARGS=/Store/catalog/include/bikeBuilderInit.jsp.ajaxform-getGruppos&/backcountry/catalog/bikebuilder/formhandler/BikeBuilderFormHandler.getCompatibleGruppos=";
  var url = "/compcyclist";

  var temp = $.ajax({
    type: "POST",
    url: url,
    data: sendInfo,
    success: function (msg) {
      if (msg) {
        bike_ = temp;
        console.info("Request bike succeeded!");
      } else {
        console.error("There was an error fetching bike info!");
      }
    }
  });
}

function requestCategory(category) {
  var cat_id = $("#cat_id").val();
  var url = "/public/product/categories/" + cat_id + "/products?site=bcs&outlet=false&preview=false";

  var temp = $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    success: function (msg) {
      if(msg) {
        category = temp.responseJSON.products;
        console.info("Request product succeeded!");
      } else {
        console.error("There was an error fetching product info!");
      }
    },
    error: function(msg) {
      console.error(msg);
    }
  });
}

function fetchCategory(category_array, category_id) {
  var url = "/public/product/categories/" + category_id + "/products?site=bcs&outlet=false&preview=false";
  var temp_array;

  var temp = $.ajax({
    type: "GET",
    url: url,
    dataType: "json",
    contentType: "application/json;charset=UTF-8",
    success: function (msg) {
      if(msg) {
        temp_array = temp.responseJSON.products;
        for(var i = 0; i < temp_array.length; ++i) {
          if(category_array.length <= i) pushProduct(temp_array[i].id, category_array);
        }
      } else {
        console.error("There was an error fetching product info!");
      }
    },
    error: function(msg) {
      console.error(msg);
    }
  });
}

var frames_array = [];
var frames = "cat100203351";
fetchCategory(frames_array, frames);
var saddles_array = [];
var saddles = "bcsCat14111000172";
fetchCategory(saddles_array, saddles);
var handlebars_array = [];
var handlebars = "bcsCat14111000154";
fetchCategory(handlebars_array, handlebars);
var wheels_array = [];
var wheels = "bcsCat14111100209";
fetchCategory(wheels_array, wheels);
var cranksets_array = [];
var cranksets = "bcsCat14111000136";
fetchCategory(cranksets_array, cranksets);

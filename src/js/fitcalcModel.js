var FitCalcModel = Backbone.Model.extend({
  url: 'http://hackathon.backcountry.com:8081/hackathon/public/fitcalculator/fit',
  //defaults: {},
  //initialize: function() {}

  setModelValues: function() {
    this.attributes.arm = $("#arm").val();
    this.attributes.bikeType = $("#bikeType").val();
    this.attributes.forearm = $("#forearm").val();
    this.attributes.gender = $("#gender").val();
    this.attributes.inseam = $("#inseam").val();
    this.attributes.lowerLeg = $("#lowerLeg").val();
    this.attributes.overallHeight = $("#overallHeight").val();
    this.attributes.sternalNotch = $("#sternalNotch").val();
    this.attributes.thigh = $("#thigh").val();
    this.attributes.trunk = $("#trunk").val();
    this.attributes.unit = $("#unit").val();
  }
});

var app = new FitCalcModel();



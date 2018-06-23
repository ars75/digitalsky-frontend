
$(document).ready(function(){

// Help me apply

$('.drone_weight').on('change', function() {
  var droneWeight = this.value;
  $(this).addClass('selected');
  $('#help-me-apply .other-parts').show();
  $('#help-me-apply .question').addClass('selected');
  $('#help-me-apply .button').addClass('show');

  // console.log(droneWeight);
  if(droneWeight == "under") {
    $('#help-me-apply .answer .under').show();

    $('#help-me-apply .answer .over').hide();
    $('#help-me-apply .answer .pilot').hide();
    $('#help-me-apply .answer .operator').hide();
    $('#help-me-apply .answer .manufacturer').hide();
    $('#help-me-apply .answer .in-india').hide();
    $('#help-me-apply .answer .import').hide();
  }
  if(droneWeight == "over") {
    $('#help-me-apply .answer .over').show();
    $('#help-me-apply .answer .under').hide();
  }

});

$('.license_type').on('change', function() {
  var licenseType = this.value;
  $(this).addClass('selected');
  if(licenseType == "pilot") {
    $('#help-me-apply .pilot').show();
    $('#help-me-apply .operator').hide();
    $('#help-me-apply .manufacturer').hide();
  }
  if(licenseType == "operator") {
    $('#help-me-apply .pilot').hide();
    $('#help-me-apply .operator').show();
    $('#help-me-apply .manufacturer').hide();
  }
  if(licenseType == "manufacturer") {
    $('#help-me-apply .pilot').hide();
    $('#help-me-apply .operator').hide();
    $('#help-me-apply .manufacturer').show();
  }
});

$('.acquisition_type').on('change', function() {
  var acquisitionType = this.value;
  $(this).addClass('selected');
  if(acquisitionType == "in-india") {
    $('#help-me-apply .in-india').show();
    $('#help-me-apply .import').hide();
  }
  if(licenseType == "import") {
    $('#help-me-apply .in-india').show();
    $('#help-me-apply .import').hide();
  }
});

$(document).foundation();

});

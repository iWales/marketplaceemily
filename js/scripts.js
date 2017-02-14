$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var dessertInput = $("input:radio[name=dessert]:checked").val();
    var colorInput = $("#color").val();
    var shipInput = $("#shippingType").val();
    var dateInput = $("#ship").val();

    $(".name").text(nameInput);
    $(".address").text(addressInput);
    $(".dessert").text(dessertInput);
    $(".color").text(colorInput);
    $(".shipType").text(shipInput);
    $(".shippingDate").text(dateInput);

    $("#initially-showing").hide();
    $("#initially-hidden").show();

    event.preventDefault();
  });
});

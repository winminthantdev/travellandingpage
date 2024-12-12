$(document).ready(function () {
  // Menu Button
  $(".navbarbuttons").click(function () {
    $(this).toggleClass("crossxs");
  });

  // Select Currency
  $("#currencytype").on("change", function () {
    const selectCurrency = $(this).val();
    console.log(selectCurrency);
  });

  // Tabs

  $(".tablinks").click(function () {
    $(".tablinks").removeClass("actives");
    $(this).addClass("actives");
    $(".tabpannels").css({
      display: "none",
    });
    const gettab = $(this).data("gettab");
    $(`#${gettab}`).css({
      display: "block",
    });
  });
  $(".tablinks:first").click();
});

$(document).ready(function(){
    $("#InputSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#list-tab a").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

$(document).ready(function(){
    $("#gridlist").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#nav-tabContent div").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });

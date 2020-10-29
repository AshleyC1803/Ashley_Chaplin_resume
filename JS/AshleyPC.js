$(document).ready(function () {

loadpg();
loadEventListeners();

function loadpg() {
    $("#mycv").find('#reveal').hide();
    }



function loadEventListeners() {
$('#revealme').on('click', function() {
    $('#reveal').show(1000);

});
}

});

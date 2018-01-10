
// $(function () {
//     $('#_ICO').waypoint(function () {
//         highlight_Ico();
//     });

//     $('#_Vision').waypoint(function () {
//         highlight_Vision();
//     });

//     $('#_HowItWorks').waypoint(function () {
//         highlight_HowItWorks();
//     });

//     $('#_RoadMap').waypoint(function () {
//         highlight_Roadmap();
//     });

//     $('#_Team').waypoint(function () {
//         highlight_Team();
//     });

// });







// function highlight_Ico() {
//     debugger;
//     $('#menuVision').removeClass(' selected');
//     $('#menuICO').addClass('selected');
//     $('#menuHow').removeClass(' selected');
//     $('#menuMap').removeClass(' selected');
//     $('#menuTeam').removeClass(' selected');
//     $("#liICO").attr("type", "disc");
//     $("#livision").removeAttr("type", "disc");
//     $("#lihow").removeAttr("type", "disc");
//     $("#limap").removeAttr("type", "disc");
//     $("#liteam").removeAttr("type", "disc");
// }
// function highlight_Vision() {

//     debugger;
//     $('#menuVision').addClass('selected');
//     $('#menuICO').removeClass(' selected');
//     $('#menuHow').removeClass(' selected');
//     $('#menuMap').removeClass(' selected');
//     $('#menuTeam').removeClass(' selected');
//     $("#liICO").removeAttr("type", "disc");
//     $("#livision").attr("type", "disc");
//     $("#lihow").removeAttr("type", "disc");
//     $("#limap").removeAttr("type", "disc");
//     $("#liteam").removeAttr("type", "disc");
// }
// function highlight_Roadmap() {
//     $('#menuVision').removeClass(' selected');
//     $('#menuICO').removeClass(' selected');
//     $('#menuHow').removeClass(' selected');
//     $('#menuMap').addClass(' selected');
//     $('#menuTeam').removeClass(' selected');
//     $("#liICO").removeAttr("type", "disc");
//     $("#livision").removeAttr("type", "disc");
//     $("#lihow").removeAttr("type", "disc");
//     $("#limap").attr("type", "disc");
//     $("#liteam").removeAttr("type", "disc");
// }
// function highlight_Team() {
//     $('#menuVision').removeClass(' selected');
//     $('#menuICO').removeClass(' selected');
//     $('#menuHow').removeClass(' selected');
//     $('#menuMap').removeClass(' selected');
//     $('#menuTeam').addClass(' selected');
//     $("#liICO").removeAttr("type", "disc");
//     $("#livision").removeAttr("type", "disc");
//     $("#lihow").removeAttr("type", "disc");
//     $("#limap").removeAttr("type", "disc");
//     $("#liteam").attr("type", "disc");

// }
// function highlight_HowItWorks() {
//     $('#menuVision').removeClass(' selected');
//     $('#menuICO').removeClass(' selected');
//     $('#menuHow').addClass('selected');
//     $('#menuMap').removeClass(' selected');
//     $('#menuTeam').removeClass(' selected');
//     $("#liICO").removeAttr("type", "disc");
//     $("#livision").removeAttr("type", "disc");
//     $("#lihow").attr("type", "disc");
//     $("#limap").removeAttr("type", "disc");
//     $("#liteam").removeAttr("type", "disc");
// }




function scroll_navigateToIco() {


    $('#menuVision').removeClass(' selected');
    $('#menuICO').addClass('selected');
    $('#menuHow').removeClass(' selected');
    $('#menuMap').removeClass(' selected');
    $('#menuTeam').removeClass(' selected');

    $("#liICO").attr("type", "disc");
    $("#livision").removeAttr("type", "disc");
    $("#lihow").removeAttr("type", "disc");
    $("#limap").removeAttr("type", "disc");
    $("#liteam").removeAttr("type", "disc");


}
function scroll_navigateToVision() {
    

    $('#menuVision').addClass('selected');
    $('#menuICO').removeClass(' selected');
    $('#menuHow').removeClass(' selected');
    $('#menuMap').removeClass(' selected');
    $('#menuTeam').removeClass(' selected');

    $("#liICO").removeAttr("type", "disc");
    $("#livision").attr("type", "disc");
    $("#lihow").removeAttr("type", "disc");
    $("#limap").removeAttr("type", "disc");
    $("#liteam").removeAttr("type", "disc");

}
function scroll_navigateToHow() {


    $('#menuVision').removeClass(' selected');
    $('#menuICO').removeClass(' selected');
    $('#menuHow').addClass('selected');
    $('#menuMap').removeClass(' selected');
    $('#menuTeam').removeClass(' selected');

    $("#liICO").removeAttr("type", "disc");
    $("#livision").removeAttr("type", "disc");
    $("#lihow").attr("type", "disc");
    $("#limap").removeAttr("type", "disc");
    $("#liteam").removeAttr("type", "disc");


}
function scroll_navigateToRoad() {



    $('#menuVision').removeClass(' selected');
    $('#menuICO').removeClass(' selected');
    $('#menuHow').removeClass(' selected');
    $('#menuMap').addClass(' selected');
    $('#menuTeam').removeClass(' selected');

    $("#liICO").removeAttr("type", "disc");
    $("#livision").removeAttr("type", "disc");
    $("#lihow").removeAttr("type", "disc");
    $("#limap").attr("type", "disc");
    $("#liteam").removeAttr("type", "disc");



}


function scroll_navigateToTeam() {



    $('#menuVision').removeClass(' selected');
    $('#menuICO').removeClass(' selected');
    $('#menuHow').removeClass(' selected');
    $('#menuMap').removeClass(' selected');
    $('#menuTeam').addClass(' selected');

    $("#liICO").removeAttr("type", "disc");
    $("#livision").removeAttr("type", "disc");
    $("#lihow").removeAttr("type", "disc");
    $("#limap").removeAttr("type", "disc");
    $("#liteam").attr("type", "disc");

}


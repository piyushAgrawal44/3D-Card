var oldhtml = document.getElementById('body').innerHTML;
function secondpage()
{
    document.getElementById("firstpage").style.transform = "rotateY(-180deg)";
    document.getElementById("firstpagebackface").style.transform = "rotateY(180deg)";
    document.getElementById("container").style.transform = "translateX(120px)";
}

function undo1(){
    document.getElementById("firstpage").style.transform = "rotateY(0deg)";
    document.getElementById("firstpagebackface").style.transform = "rotateY(0deg)";
    document.getElementById("container").style.transform = "translateX(0px)";
}

function lastpage()
{
    document.getElementById("secondpage").style.transform = "rotateY(-180deg)";
    document.getElementById("secondpagebackface").style.transform = "rotateY(180deg)";
    document.getElementById("secondpagebackface").style.zIndex ="2";
}

function undo2(){
    document.getElementById("secondpage").style.transform = "rotateY(0deg)";
    document.getElementById("secondpagebackface").style.transform = "rotateY(0deg)";
    document.getElementById("secondpagebackface").style.zIndex ="1";
}

function gotofront()
{
    document.getElementById('body').innerHTML=oldhtml;
}
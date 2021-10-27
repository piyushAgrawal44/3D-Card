var oldhtml = document.getElementById('body').innerHTML;
function piyush()
{
    document.getElementById("firstpage").style.transform = "rotateY(-180deg)";
    document.getElementById("firstpagebackface").style.transform = "rotateY(180deg)";
    document.getElementById("container").style.transform = "translateX(120px)";
}

function aayush()
{
    document.getElementById("secondpage").style.transform = "rotateY(-180deg)";
    document.getElementById("secondpagebackface").style.transform = "rotateY(180deg)";
    document.getElementById("secondpagebackface").style.zIndex ="2";
}
function gotofront()
{
    document.getElementById('body').innerHTML=oldhtml;
}
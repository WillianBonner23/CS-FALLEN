let mapSelected = null;
let menu = false;

mapSet = function(_name) 
{
    menu = true;
    mapSelected = _name;
}

function checkState() {

    if (menu)
    {
        if (mapSelected != null)
        {
        
            document.getElementById("startMenu").style.display = "none";
            document.getElementById(mapSelected).style.display = "block";
        }
    }


    setTimeout(checkState, 500); // chama de novo em 1s
}
  
checkState();  
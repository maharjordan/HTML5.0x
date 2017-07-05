var nav_flag = false;
function display_menu(){
    if(!nav_flag){
        document.getElementById("nav_bar").style.display = "block";
        nav_flag = true;
    }
    else{
        document.getElementById("nav_bar").style.display = "none";
        nav_flag = false;
    }
}
function My_First_Function() {
    var result = document.getElementById("Irish");
    var String = "Kiss me, I'm Irish!";
    String = String.fontcolor("green"); // Works even though fontcolor() is deprecated
    result.innerHTML = String;
    //result.style.color = "green";
    result.style.background = "black";
}
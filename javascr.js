let start="X";
let stop=false;
let createbutt;
function reset()
{
    document.getElementById('ul').innerHTML = "";
    document.getElementById('um').innerHTML = "";
    document.getElementById('ur').innerHTML = "";
    document.getElementById('ml').innerHTML = "";
    document.getElementById('mm').innerHTML = "";
    document.getElementById('mr').innerHTML = "";
    document.getElementById('ll').innerHTML = "";
    document.getElementById('lm').innerHTML = "";
    document.getElementById('lr').innerHTML = "";
    start="X";
    stop=false;
    document.getElementById('over').innerHTML="";
    document.getElementById('won').innerHTML="";
    document.getElementById('fin').style.backgroundColor = "#808080";
    document.getElementById('replay').style.visibility="hidden";
    document.getElementById('fin').style.visibility="hidden";
}
function change()
{
    if(start == "X")
    {
        start= "O";
    }
    else
    {
        start= "X";
    }
}
function check(){
    if(document.getElementById('ul').innerHTML === "X" && document.getElementById('um').innerHTML === "X" && document.getElementById('ur').innerHTML === "X" || document.getElementById('ml').innerHTML === "X" && document.getElementById('mm').innerHTML === "X" && document.getElementById('mr').innerHTML === "X" || document.getElementById('ll').innerHTML === "X" && document.getElementById('lm').innerHTML === "X" && document.getElementById('lr').innerHTML === "X" || document.getElementById('ul').innerHTML === "X" && document.getElementById('ml').innerHTML === "X" && document.getElementById('ll').innerHTML === "X" || document.getElementById('um').innerHTML === "X" && document.getElementById('mm').innerHTML === "X" && document.getElementById('lm').innerHTML === "X" || document.getElementById('ur').innerHTML === "X" && document.getElementById('mr').innerHTML === "X" && document.getElementById('lr').innerHTML === "X" || document.getElementById('ul').innerHTML === "X" && document.getElementById('mm').innerHTML === "X" && document.getElementById('lr').innerHTML === "X" ||  document.getElementById('ur').innerHTML === "X" && document.getElementById('mm').innerHTML === "X" && document.getElementById('ll').innerHTML === "X")
    {
        document.getElementById('fin').style.visibility="visible";
        document.getElementById('over').innerHTML="GAME OVER";
        document.getElementById('won').innerHTML="Hurrah!!! Player1(X) Won";
        document.getElementById('fin').style.color= "#5e3927";
        document.getElementById('fin').style.backgroundColor = "#fff0f5";
        stop=true;
        document.getElementById('replay').style.visibility="visible";
    }
    else if(document.getElementById('ul').innerHTML === "O" && document.getElementById('um').innerHTML === "O" && document.getElementById('ur').innerHTML === "O" || document.getElementById('ml').innerHTML === "O" && document.getElementById('mm').innerHTML === "O" && document.getElementById('mr').innerHTML === "O" || document.getElementById('ll').innerHTML === "O" && document.getElementById('lm').innerHTML === "O" && document.getElementById('lr').innerHTML === "O" || document.getElementById('ul').innerHTML === "O" && document.getElementById('ml').innerHTML === "O" && document.getElementById('ll').innerHTML === "O" || document.getElementById('um').innerHTML === "O" && document.getElementById('mm').innerHTML === "O" && document.getElementById('lm').innerHTML === "O" || document.getElementById('ur').innerHTML === "O" && document.getElementById('mr').innerHTML === "O" && document.getElementById('lr').innerHTML === "O" || document.getElementById('ul').innerHTML === "O" && document.getElementById('mm').innerHTML === "O" && document.getElementById('lr').innerHTML === "O" ||  document.getElementById('ur').innerHTML === "O" && document.getElementById('mm').innerHTML === "O" && document.getElementById('ll').innerHTML === "O")
    {
        document.getElementById('fin').style.visibility="visible";
        document.getElementById('over').innerHTML="GAME OVER";
        document.getElementById('won').innerHTML="Hurrah!!! Player2(O) Won";
        document.getElementById('fin').style.color= "#5e3927";
        document.getElementById('fin').style.backgroundColor = "#fff0f5";
        stop=true;
        document.getElementById('replay').style.visibility="visible";
    }
    else if(document.getElementById('ul').innerHTML != "" && document.getElementById('um').innerHTML != "" && document.getElementById('ur').innerHTML != "" && document.getElementById('ml').innerHTML != "" && document.getElementById('mm').innerHTML != "" && document.getElementById('mr').innerHTML != "" && document.getElementById('ll').innerHTML != "" && document.getElementById('lm').innerHTML != "" && document.getElementById('lr').innerHTML != "")
    {
        document.getElementById('fin').style.visibility="visible";
        document.getElementById('over').innerHTML="GAME OVER";
        document.getElementById('won').innerHTML="Oops!!! It's a Draw";
        document.getElementById('fin').style.color= "#5e3927";
        document.getElementById('fin').style.backgroundColor = "#fff0f5";
        stop=true;
        document.getElementById('replay').style.visibility="visible";
    }
}
function cul()
{
    if(stop==false)
    {
        if(document.getElementById('ul').innerHTML === "")
        {
            document.getElementById('ul').innerHTML = start;
            
        }
        change();
        check();
    }
}
function cum()
{
    if(stop==false)
    {
        if(document.getElementById('um').innerHTML === "")
        {
            document.getElementById('um').innerHTML = start;
            
        }
        change();
        check();
    }
}
function cur()
{
    if(stop==false)
    {
        if(document.getElementById('ur').innerHTML === "")
        {
            document.getElementById('ur').innerHTML = start;
            
        }
        change();
        check();
    }
}
function cml()
{
    if(stop==false)
    {
        if(document.getElementById('ml').innerHTML === "")
        {
            document.getElementById('ml').innerHTML = start;
            
        }
        change();
        check();
    }
}
function cmm()
{
    if(stop==false)
    {
        if(document.getElementById('mm').innerHTML === "")
        {
            document.getElementById('mm').innerHTML = start;
            
        }
        change();
        check();
    }
}
function cmr()
{
    if(stop==false)
    {
        if(document.getElementById('mr').innerHTML === "")
        {
            document.getElementById('mr').innerHTML = start;
            
        }
        change();
        check();
    }
}
function cll()
{
    if(stop==false)
    {
        if(document.getElementById('ll').innerHTML === "")
        {
            document.getElementById('ll').innerHTML = start;
            
        }
        change();
        check();
    }
}
function clm()
{
    if(stop==false)
    {
        if(document.getElementById('lm').innerHTML === "")
        {
            document.getElementById('lm').innerHTML = start;
            
        }
        change();
        check();
    }
}
function clr()
{
    if(stop==false)
    {
        if(document.getElementById('lr').innerHTML === "")
        {
            document.getElementById('lr').innerHTML = start;   
        }
        change();
        check();
    }
}

 const userone =document.getElementById("first");
//  const usertwo = document.getElementById("second");
//  const userthree= document.getElementById("thrid");

userone.addEventListener("change",()=> changen (userone.value));
function changen (color){
    document.getElementById("one").style.backgroundColor=color;

}

function second(){
    // document.getElementById("two").style.backgroundColor="blue"
    // document.getElementById("two").style.backgroundColor="red"
    const btn = document.getElementById("second");
    if(btn.innerText==="second")
    {
        document.getElementById("second").innerText="orange"
        document.getElementById("second").classList.add=("blue");
    }
    else{
        document.getElementById("second").innerText="red"
        document.getElementById("second").classList.color("red");
    }
}

function thrid(){
    document.getElementById("three").style.backgroundColor="yellow"
}


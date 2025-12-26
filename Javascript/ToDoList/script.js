function AddTask() {
    const task = document.getElementById("NewTask").value.trim();
    
    // console.log(task);

    if(task){
        const l = document.createElement("li");
    l.classList.add("p-2", "d-flex", "align-items-center", "border-bottom");
      
    const  d = document.createElement("div");
    d.classList.add("w-75");
    d.innerText = task;

    const b = document.createElement("button");
    b.classList.add("btn", "btn-danger", "ms-3");
    b.innerHTML = `<i class="bi bi-trash"></i> Delete`
    b.onclick = () => {
        l.remove();
    };



    // const  dd = document.createElement("div");
    // dd.classList.add("w-50");
    // dd.innerText = task;
  

    //  const editbtn = document.createElement("button");
    //  editbtn.classList.add("btn", "btn-danger", "ms-1")
    //  editbtn.innerHTML =`<i class="bi bi-trash"></i> Edit`
    //   editbtn.onclick= () =>{
    //     l.editbtn();
    //   };
    
    

    

    l.appendChild(d);
    l.appendChild(b);
    
    document.getElementById("TaskList").appendChild(l);

    document.getElementById("NewTask").value="";


    }
     
    
}
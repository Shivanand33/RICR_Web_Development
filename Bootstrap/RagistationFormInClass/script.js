function sumbit() {
    // console.log("Clicked sumbit button")
    

     
    document.querySelectorAll("input[name='batch']:checked");  
    batch.forEach((element) => {
   selectedTiming.push(element.value);
    });

// const selsectedBatch = batch.forEach()
 console.log(selectedTiming);

 const selcectedBatch = document.querySelector(
    "input[name='timing']:cheaked"
 ).value;

 console.log(selcectedBatch);
}
function clearForm() {
    window.location.reload();
}


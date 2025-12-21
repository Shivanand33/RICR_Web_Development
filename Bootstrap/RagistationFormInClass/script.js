 function submit() {
    const fn = document.getElementById("FullName").value;
    const em = document.getElementById("email").value;
    const mb = document.getElementById("mobile").value;
    const dob = document.getElementById("dob").value;
    const ql = document.getElementById("qualification").value;
    const sr = document.getElementById("score").value;
    const cr = document.getElementById("course").value;
    const nam = document.getElementById("name").value;
    const mo = document.getElementById("mobile").value;
    const sp = document.getElementById("special").value;
   
    let Preferedbatch = [];
    document
        .querySelectorAll("input[name='batch']:checked")
        .forEach((element) => {
            Preferedbatch.push(element.value);
        });
    const pt = document.querySelector("input[name='timing']:checked")
    const ad = document.getElementById("address").value;
    const ct = document.getElementById("city").value;
    const pn = document.getElementById("pin").value;

    let hu = [];
    document
        .querySelectorAll("input[name='about']:checked")
        .forEach((element) => {
            hu.push(element.value);
        });

    console.log("Full Name: " + fn);
    console.log("Email: " + em);
    console.log("Mobile: " + mb);
    console.log("Date of Birth: " + dob);
    console.log("Qualification: " + ql);
    console.log("Score: " + sr);
    console.log("Course: " + cr);
    console.log("Preferred Batch: " + Preferedbatch.join(", "));
    console.log("Preferred Timing: " + pt);
    console.log("Address: " + ad);
    console.log("City: " + ct);
    console.log("Pin Code: " + pn);
    console.log("Father Name: " + nam);
    console.log("Mobile: " + mo);
    console.log("Special Requirments: " + sp);
    console.log("How did you hear about us:" + hu.join(","));
}

function clearForm() {
    window.location.reload();
}
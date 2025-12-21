//gross salary calculate method
function CalculateGcsalary(basic) {
  let hra = 0;
  let da = 0;

  if (basic <= 10000) {
    hra = basic * 0.2;
    da = basic * 0.1;
  } else {
    hra = basic * 0.3;
    da = basic * 0.2;
  }

  let gross = basic + hra + da;

  return {
    basic: basic,
    hra: hra,
    da: da,
    gross: gross,
  };
}
///indian currnecy me convert
function formatINR(amount) {
  return amount.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
}
///main method
function GrossSalary(){
  let salaryInput = document.getElementById("salary");
  let error = document.getElementById("error");
  let calculatebtn = document.getElementById("calculatebtn");
  let success = document.getElementById("success");

  error.innerText = "";
  success.classList.add("d-none");

  let sal = Number(salaryInput.value);

  if (isNaN(sal) || sal <= 0) {
    error.innerText = "Error: Please enter a valid basic salary!";
    return;
  }

  calculatebtn.disabled = true;
  calculatebtn.innerHTML = `<span class="spinner-border spinner-border-sm"></span> Calculating...`;

  //time out 5 sec
  setTimeout(() => {
    let result = CalculateGcsalary(sal);

    document.getElementById("basicsalary").value = formatINR(result.basic);
    document.getElementById("hra").value = formatINR(result.hra);
    document.getElementById("da").value = formatINR(result.da);
    document.getElementById("Gross").value = formatINR(result.gross);

    success.classList.remove("d-none");
    success.innerText = "Salary Calculated Successfully!";

    calculatebtn.disabled = false;
    calculatebtn.innerHTML = "Gross Salary";
  }, 500);
}



//reset function
function Reset() {
  document.getElementById("salary").value = "";
  document.getElementById("basicsalary").value = "";
  document.getElementById("hra").value = "";
  document.getElementById("da").value = "";
  document.getElementById("Gross").value = "";
  document.getElementById("error").innerText = "";
  document.getElementById("success").classList.add("d-none");
}

function Submit() {
  const name = document.getElementById("FullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const dob = document.getElementById("dob").value.trim();

  document.querySelectorAll(".Error").forEach((element) => {
    element.innerHTML = "";
  });
   if (!name) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else if (!/^[A-Za-z ]+$/.test(name)) {
    document.getElementById("NameError").innerText =
      "Only Alphabets and Spaces are Allowed";
    return;
  }

  if (!email) {
    document.getElementById("EmailError").innerText = "Required";
    return;
  } else if (!/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(email)) {
    document.getElementById("EmailError").innerText = "Use Proper Email Format";
    return;
  }

  if (!mobile) {
    document.getElementById("PhoneError").innerText = "Required";
    return;
  } else if (!/^[6-9]\d{9}$/.test(mobile)) {
    document.getElementById("PhoneError").innerText =
      "Only Indian Mobile Nummber allowed";
    return;
  }

  if (!dob) {
    document.getElementById("NameError").innerText = "Required";
    return;
  } else {
    const currentyear = new Date().getFullYear();
    const birthyear = Number(dob.split("-")[0]);
    if (currentyear - birthyear < 17) {
      document.getElementById("DOBError").innerText =
        "You must be 18 years Old";
      return;
    }
  }

  const data = {
    FullName: name,
    Email: email,
    Phone: mobile,
    DOB: dob,
  };

  console.log(data);
}
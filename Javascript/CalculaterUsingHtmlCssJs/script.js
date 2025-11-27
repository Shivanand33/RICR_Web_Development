function Result(char) {
    if (char === "=") {
        try {
            document.getElementById("display").value = eval(
                document.getElementById("display").value
            );
        } catch (error) {
            alert("Invalid Expression");
            document.getElementById("display").value = "";
        }
    } else if (char === "C") {
        document.getElementById("display").value = "";
    } else if (char === "DEL") {
        let val = document.getElementById("display").value;
        document.getElementById("display").value = val.slice(0, -1);
    } else {
        document.getElementById("display").value =
            document.getElementById("display").value + char;
    }
}
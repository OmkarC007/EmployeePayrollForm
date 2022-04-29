window.addEventListener("DOMContentLoaded",(event)=>{



    // validation for salary ..................................
    const salary = document.querySelector("#salary");
    const output = document.querySelector(".salary-output");
    output.textContent= salary.value;
    salary.addEventListener("input", function(){
        output.textContent = salary.value;
    });
})

// storing in local starage ..................
function myFunc(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var department = document.getElementById("department").value;
    var salary = document.getElementById("salary").value;
    var feedback = document.getElementById("feedback").value;


    localStorage.setItem("name",name );
    localStorage.setItem("gender",gender );
    localStorage.setItem("department",department );
    localStorage.setItem("salary",salary );
    localStorage.setItem("feedback",feedback );
}

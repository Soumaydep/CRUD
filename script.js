var selectedRow=null;

//Alert Show//
function showAlert(message,className) {
     const div=document.createElement("div");//create div where msg will show//
     div.className= `alert alert-${className}`; //boostrap className like this and className as parameter set//
    //  div.style.background="red";
     div.append(document.createTextNode(message)); // create node type text and insert message //
    //  console.log(div);
     const container=document.querySelector(".container");
     const main=document.querySelector(".main");
     container.insertBefore(div,main);

     setTimeout(() =>document.querySelector(".alert").remove(),3000); // set timeout after 3s the alert class will remove to show//

}

//delete data
const slist=document.querySelector(".student-list");
slist.addEventListener("click",function(e){
      e.preventDefault();
     if(e.target.classList.contains("delete"))
     {
        //  console.log("you clicked the delete button");
         e.target.parentNode.parentNode.remove();
         showAlert("Student data deleted","danger");
         
     }
})

// clear All Field

function clearAllField()
{
    document.querySelector("#firstName").value = "";
    document.querySelector("#lastName").value = "";
    document.querySelector("#rollno").value = "";
    document.querySelector("#password").value ="";
}

// Add data
const form=document.querySelector("#student-form");
form.addEventListener("submit",function(e)
{
    e.preventDefault();

    //all input value data//
    const firstName=document.querySelector("#firstName").value;
    const lastName=document.querySelector("#lastName").value;
    const rollno=document.querySelector("#rollno").value;
    const password=document.querySelector("#password").value;
    //validate
    if (firstName=="" || lastName=="" || rollno=="" || password== "")
    {
        showAlert("Please fill in all fields","danger");
    }
    else{
      if(selectedRow==null){ 
          const list=document.querySelector(".student-list");
          const row=document.createElement("tr");
          row.innerHTML=`
                              <td>${firstName}</td>
                              <td>${lastName}</td>
                              <td>${rollno}</td>
                              <td>${password}</td>
                              <td>
                                  <a href="" class="btn btn-warning btn-sm edit">Edit</a>
                                  <a href="" class="btn btn-danger btn-sm delete">Delete</a>
                              </td>
                            </tr>
                        `;
                        list.append(row);
                        selectedRow=null;
                        showAlert("Student data added successfully","success");
        }
        else{
            selectedRow.children[0].textContent = firstName; //input filed's data after submit if you not get it comments clearfield()//
            selectedRow.children[1].textContent = lastName;
            selectedRow.children[2].textContent = rollno;
            selectedRow.children[3].textContent = password;
            // console.log(selectedRow);
            selectedRow=null;
            showAlert("Student info Edited","info");
        }
        clearAllField();
    }
});

//Edit Data

const delbtn = document.querySelector(".student-list");
delbtn.addEventListener("click",function(e){
    e.preventDefault();
    if(e.target.classList.contains("edit")){
        selectedRow=e.target.parentElement.parentElement;
        // console.log(selectedRow.children[0]); //<td>Soumaydeep</td>
        document.querySelector("#firstName").value=selectedRow.children[0].textContent;
        document.querySelector("#lastName").value=selectedRow.children[1].textContent;
        document.querySelector("#rollno").value=selectedRow.children[2].textContent;
        document.querySelector("#password").value=selectedRow.children[3].textContent;
    }
    

})





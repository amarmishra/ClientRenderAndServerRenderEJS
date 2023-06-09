let delTaskarr=[];
let taskrem = document.getElementById('delID');

function deleteTasks(){
    let addCheckToDel = document.getElementsByName('checkbox');

    for(let i=0;i<addCheckToDel.length;i++){
        if(addCheckToDel[i].checked){
            if(!delTaskarr.includes(addCheckToDel[i].value)){
                delTaskarr.push(addCheckToDel[i].value);
            }
            
        }
        else{
            let delInd = delTaskarr.indexOf(addCheckToDel[i].value);
            if(delInd != -1){
                delTaskarr.splice(delInd,1);
            }
        }
    }
    taskrem.formAction = `/remTaskByID/${delTaskarr}`;
}
function deleteTaskFromDB(){
    location.href = taskrem.formAction;
}

// adding form action to show personal tasks when clicked personal button

function showCategoryWise(id){
    
    if(id === "all"){
        document.getElementById(id).formAction = '/';
    }
    else{
        document.getElementById(id).formAction = `/${id}`;
    }
    console.log(id);  
    location.href = document.getElementById(id).formAction;
}

// To remove all the past dates from the date field

var date = new Date();
var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
var mm = (date.getMonth() + 1) <10 ? '0' + (date.getMonth() +1) : date.getMonth()+1;

document.getElementById("currDate").min = new Date().getFullYear() + "-" +  mm + "-" + day

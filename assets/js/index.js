/**code changes by Amar Mishra for filter by category with client side filtering */
let allTask = JSON.parse(`<%-JSON.stringify(Alltask)%>`)
/** */

const taskListFiltered=document.getElementById('task-list-manipulate');
let delTaskarr=[];
let taskrem = document.getElementById('delID'); //delete button

function deleteTasks(){     //this function executes when clicked on delete btn
    let addCheckToDel = document.getElementsByName('checkbox');     //getting all the tasks as per the checkbox class name 

    for(let i=0;i<addCheckToDel.length;i++){
        if(addCheckToDel[i].checked){       //if the check box is checked then we add the value(assigned with taskID) of checkbox to delTaskarr
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
    taskrem.formAction = `/remTaskByID/${delTaskarr}`;  //providing the action to be taken when the delete button is submitted
}
function deleteTaskFromDB(){
    location.href = taskrem.formAction;
}

// adding formaction to show tasks as per the category selected when clicked on the category buttons.

/**code changed by Amar Mishra */
function showCategoryWise(id){
    
    let filteredList;
    if(id==='all') {
        filteredList=allTask
    } else {
        filteredList=allTask.filter((task)=>task.category===id)
    }
   let listItems=""
    for(let i of filteredList){  
        listItems+=`<li>                    
            <div class="date-task">
                <div class="task">
                    <input class="checkbox" name="checkbox" value="${i._id}" type="checkbox" onclick="${deleteTasks()}"/>
                    <label class="checkbox-label" for="checked">
                        ${ i.task}    
                    </label>
                </div>
                <div class="task-duedate">
                    <p>
                        ${i.due.toString().substring(4,15)}   
                    </p>
                </div>
            </div>
            <div id="list-cat">
                <p>
                    ${i.category}
                </p>
            </div>
        </li>`
        
    }  

        taskListFiltered.innerHTML=listItems
}
/** */
// To remove all the past dates from the date field

var date = new Date();
var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
var mm = (date.getMonth() + 1) <10 ? '0' + (date.getMonth() +1) : date.getMonth()+1;

document.getElementById("currDate").min = new Date().getFullYear() + "-" +  mm + "-" + day

console.log('سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ ، أَشْهَدُ أَنْ لا إِلَهَ إِلا أَنْتَ ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ')


/* all variables */

let addInput = document.querySelector('.newTask input'),
addBtn = document.querySelector('.newTask .plus'),
tasksContainer = document.querySelector(".tasksContainer"),
tasksCount = document.querySelector('.task-count span'),
tsksCompleted = document.querySelector('.completed span');

/* focus in the input  */
window.onload = function(){
    addInput.focus();
}

/* adding task */

addBtn.onclick = function(){
   if (addInput.value === ''){
    let  NoTasksMsg = document.querySelector('.noTasks');

    NoTasksMsg.innerHTML= "حتي في التاسك مش عايز تعمل حاجه !<br> ضيف اي تاسك اثابكم الله";
    document.getElementById("noTasks").style.direction = "rtl";
    document.getElementById("noTasks").style.padding = "0 30px 0 10px";
   }else{

  let  NoTasksMsg = document.querySelector('.noTasks');

    if(document.body.contains(document.querySelector(".noTasks"))){


       NoTasksMsg.remove();
    
    }
    /* create span btn*/

    let mainSpan = document.createElement("span")
    /* create delete btn*/
    
    let deleteBtn = document.createElement("span");
    /* create span btn text*/

    let text = document.createTextNode(addInput.value);
    /* create delete btn text*/

    let deleteText = document.createTextNode("delete");

    mainSpan.appendChild(text);

    mainSpan.className = 'task-box';

        deleteBtn.appendChild(deleteText)
        deleteBtn.className = 'delete';

        mainSpan.appendChild(deleteBtn);

        /* add the task to the container */
        tasksContainer.appendChild(mainSpan);
        addInput.value='';
        addInput.focus();

        // calculate

        calculatTasks()

    }
};

document.addEventListener('click',function(e){

if(e.target.className== 'delete')
e.target.parentNode.remove();
/*check task numbers */
calculatTasks()
if(tasksContainer.childElementCount==0){
    NoTasks();


}


if(e.target.classList.contains('task-box'))
e.target.classList.toggle('finished')

calculatTasks()
});

function NoTasks(){

let msgSpan = document.createElement("span")

let msgText = document.createTextNode('فكر في اي حاجه تضيفها انا مش سهران اعمله علي الفاضي')
msgSpan.appendChild(msgText);

msgSpan.className = 'noTasks'

tasksContainer.appendChild(msgSpan);
calculatTasks()

}

/* tasks calculator */

function calculatTasks(){

    tasksCount.innerHTML =document.querySelectorAll('.tasksContainer .task-box').length;


    tsksCompleted.innerHTML =document.querySelectorAll('.tasksContainer .finished').length;

}
 /* سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ ، أَشْهَدُ أَنْ لا إِلَهَ إِلا أَنْتَ ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ */
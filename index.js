const add=document.querySelector(".add")
const input=document.querySelector("input[type='text']")
const listContainer=document.querySelector(".list-container")


add.addEventListener("click",()=>{
    const ul=document.createElement("ul")
    ul.classList.add("list")

    const li=document.createElement("li")
    li.innerText=`${input.value}`;
    li.classList.add("task")
    ul.appendChild(li)

    const checkBtn=document.createElement("button")
    checkBtn.classList.add("check")
    checkBtn.innerHTML="<i class='fa-solid fa-check'></i>"
    ul.appendChild(checkBtn)

    const deleteBtn=document.createElement("button")
    deleteBtn.classList.add("delete")
    deleteBtn.innerHTML="<i class='fa-solid fa-trash-can'></i>"
    ul.appendChild(deleteBtn)


    if(input.value===""){
        alert("Please enter a task")
    }else{
        listContainer.appendChild(ul)        
    }

    input.value=""


    checkBtn.addEventListener("click",()=>{
        checkBtn.parentElement.style.textDecoration="line-through"
    })

    deleteBtn.addEventListener("click",()=>{
        deleteBtn.parentElement.remove()
    })
})

//!Root
// console.log(document.documentElement)
// console.log(document.body)
// console.log(document.head)

//Childrens
// console.log(document.body.childNodes)
// console.log(document.body.children)
// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)
//? Traversing the DOM
for(node of document.body.childNodes){
    // console.log(node)
}

// !Converting dom object into array 
const childrenOfBody=Array.from(document.body.childNodes)
// console.log("Children of body",childrenOfBody)


// !Siblings
// console.log("Siblings of ul",SiblingsBody)
// console.log("Next Siblings of ul",SiblingsBody.nextElementSibling)
// console.log("Previous Siblings of ul",SiblingsBody.previousElementSibling)
// const ulTag=document.body.children[0]
// const firstLi=ulTag.children[0]
// const secondLi=ulTag.children[1]
// const thirdLi=ulTag.children[2]
// console.log(secondLi.previousElementSibling.textContent)

// !Table Dom Manipulation
const tableTag=document.body.children[1]
// console.log(tableTag.tBodies[0].rows[0].cells[1].style="color:red")

  // !ID search
        // element.style.background = "red"

        // const ulTag = document.getElementById("element")
        // ulTag.style.backgroundColor = "red"

        // listItem = document.getElementsByClassName("list-item")
        // console.log(document.getElementsByTagName("table"))

        // const listItems = document.querySelectorAll('ul > li:nth-child(2)')
        // console.log(listItems[0].textContent)
        // console.log(allDivs)

    // !Attributes
        // console.log(element.getAttribute('data'))
        // console.log(element.setAttribute('order-placed', 'pending'))
        // console.log(element.removeAttribute('order-placed'))
        // console.log(element.hasAttribute('order-placed'))
        // console.log(element.attributes)

    // !Creating and Removing the node elements
    //     const newDiv = document.createElement('div')
    //     newDiv.innerHTML = `<ul id="element" data="valid">
    //     <li class="list-item">First element</li>
    //     <li class="list-item">Second element</li>
    //     <li class="list-item">Third Element</li>
    // </ul>`
        // const newText = document.createTextNode('Hello World')
        // newDiv.appendChild(newText)
        // body.append(newDiv)
        // body.prepend(newDiv)
        // body.before(newDiv)
        // body.after(newDiv)
        // firstDiv.replaceWith(newDiv)
        // firstDiv.remove()

               // !Manipulating Classes
        // body.className = "second page"
        // body.classList.add('new')
        // body.classList.remove('new')
        // body.classList.toggle('new')
        // console.log(body.classList)

        // Mainipulating Style
        // body.style.color= "red"
        // body.style['background-color']= "orange"
        // body.style.margin= "200px"

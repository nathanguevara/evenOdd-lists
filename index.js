let usersWord = ""
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")
    function updateWord(element) {
      usersWord = element.value
    }
    
    function handleSubmit() {
      let newListItem = document.createElement('li')
      newListItem.innerText = usersWord
      oddList.appendChild(newListItem)
    }
      if(usersWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
      } 
      else {
        oddList.appendChild(newListItem)
      }
    
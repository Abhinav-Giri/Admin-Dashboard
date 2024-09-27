//hamburger toggling
const hamburger = document.getElementById('menu');
    const navigation = document.getElementById('navigation');
    hamburger.addEventListener('click', function () {
        navigation.classList.toggle('active')
        console.log('clicked');
    })


    //like increase
    const likes = document.getElementById("like")
    likes.addEventListener('click', function(){
console.log('Likes+1...')
document.getElementById("like_number").innerHTML = Number(document.getElementById("like_number").innerHTML)+1
    
})

// navigation
document.getElementById("total-save").onclick = function() {
    location.href = "/page1.html";
  };


//   const raju = document.getElementById("raju")
  const tables = document.getElementById("tables")
const names=['Raju', 'Jassi', 'John Doe', 'Aarya', 'Abhay']
  let searchInputs = document.getElementById("searchInput")
  
  searchInputs.addEventListener('change', function(){
    //  const cell =  raju.getElementsByTagName("td")
    const cell =  tables.getElementsByTagName("td")

    const index = names.findIndex(name => name.toLowerCase() === (searchInputs.value).toLowerCase());
    if (index !== -1) {
        const elements = document.querySelectorAll('.name-item'); // Adjust selector to match your HTML structure
        elements.forEach((element, idx) => {
          if (idx === index) {
            element.classList.add('active');
          } else {
            element.classList.remove('active');
          }
        });
      } else {
        console.log("Name not found");
      }

  })

  
  

function openTab(evt, link) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(link).style.display = "block";
    evt.currentTarget.className += " active";
  }


  window.addEventListener('DOMContentLoaded', ()=> {
    document.getElementById("defaultOpen").click();


    document.querySelectorAll('.arrow').forEach(arrow => arrow.addEventListener('click', (e)=> {
      //console.log(e.target.parentElement.parentElement.nextElementSibling)
      

      let nextSibling = e.target.parentElement.parentElement.nextElementSibling;


      while(nextSibling) {
        nextSibling.classList.toggle('block')
        nextSibling = nextSibling.nextElementSibling;
    }

    }))



  })

  /*

  let getSiblings = function (e) {
    // for collecting siblings
    let siblings = []; 
   
    // first child of the parent node
    let sibling  = e.target.parentElement.parentElement.firstChild;
    
    // collecting siblings
    while (sibling) {
        if (sibling !== e.target) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

*/
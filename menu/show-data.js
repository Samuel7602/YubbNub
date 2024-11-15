function showData(){
    const NAME = localStorage.getItem("name");
    document.getElementById("name").innerHTML = NAME;
  
    const GENRE = localStorage.getItem("genre");
    document.getElementById("genre").innerHTML = GENRE;
  
    const DATE = localStorage.getItem("date");
    document.getElementById("date").innerHTML = DATE;

    const REALESE = localStorage.getItem("realse");
    document.getElementById("realese").innerHTML = REALESE;
  }
  
  showData();
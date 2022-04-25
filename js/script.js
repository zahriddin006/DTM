let elInput = document.querySelector(".input-dtm");
let elSelect = document.querySelector("#select-dtm");
let elBtn = document.querySelector(".btn");
let elOutput = document.getElementById("output");
let superKont = 70;
let kontrakt = 110;
let grant = 150;
let maxGrant = 300;


elBtn.addEventListener("click", function(e) {
  e.preventDefault();

  elInputValue = elInput.value.trim();

  Selected = elSelect.value
  
  if (elInputValue < superKont){
    let newText = document.createElement("p");
    newText.textContent = "Afsuskim sizni " + Selected + " unversitetiga o'qishga qabul qila olmaymiz";
    elOutput.append(newText);
  } else if (elInputValue < kontrakt) {
    let newText = document.createElement("p");
    newText.textContent = "Sizni " + Selected + " unversitetiga super kontrak asosida o'qishga qabul qilamiz";
    elOutput.append(newText);
  } else if (elInputValue < grant) {
    let newText = document.createElement("p");
    newText.textContent = "Sizni " + Selected + " unversitetiga kontrakt asosida o'qishga qbul qilamiz";
    elOutput.append(newText);
  } else if (elInputValue == "" || isNaN(elInputValue) ){
    elInput.classList.add('wrongValue');
  } else if (elInputValue < maxGrant) {
    let newText = document.createElement("p");
    newText.textContent = "Tabriklaymiz sizni " + Selected + " unversitetiga grant asosida o'qishga qabul qilamiz";
    elOutput.append(newText);
  }
  
  else{
    elInput.setAttribute("style", "border: 2px solid black");
  }

})
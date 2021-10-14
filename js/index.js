// set the max date of #publication date input as now
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //January is 0 so need to add 1 to make it 1!
let yyyy = today.getFullYear();
if(dd<10){
  dd='0'+dd
} 
if(mm<10){
  mm='0'+mm
} 
today = yyyy+'-'+mm+'-'+dd;
document.getElementById("publication").setAttribute("max", today);

// validate each input and display corresponding error message(if there is)
function validate(elem){
    let errorMessage = ''
    const errorDiv = elem.nextElementSibling.nextElementSibling
    if(!elem.checkValidity()){
        for (key in elem.validity){  
            if(elem.validity[key]) {errorMessage = key}
        }   
    }else{
        errorMessage = ''
    }
    errorDiv.innerText = errorMessage   
}

// render image when input[type=file] field has select an image
function loadImage(input){
    const imageElem = document.getElementById('avatar-image')
    if(input.files && input.files[0]){
        let reader = new FileReader()
        reader.readAsDataURL(input.files[0])
        reader.onload = function(e){
            imageElem.src = e.target.result
            imageElem.style.opacity = '1'
        }
    }
    imageElem.style.display = "block";

}

function handleSubmit(event){
    const imageElem = document.getElementById('avatar-image')
    event.target.reportValidity()
    event.preventDefault();
    if(event.target.reportValidity()){
        alert('New Book Added')
        event.target.reset()
        imageElem.src="https://dl.acm.org/specs/products/acm/releasedAssets/images/cover-default--book.svg"
    }

}
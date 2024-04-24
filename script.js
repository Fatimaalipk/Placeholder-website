// tag names main # and . lagany ki zaroorat nahi
const select = document.querySelector('select');
const inputAll = document.querySelectorAll('input');
let  myImg = document.querySelector('img');
let  textArea = document.querySelector('textarea');

let urlobj = {};
//  replace removeHashtag
const removeHashtag = (str) => {
    return str.replace("#","");

}


// select change
const createImagepath = (e) =>{

urlobj.bgclr = removeHashtag(inputAll[1].value);
urlobj.textClr = removeHashtag(inputAll[2].value);
    // console.log(e.target.value)
    let urlpath = `https://via.placeholder.com/${select.value}/${urlobj.bgclr}/${urlobj.textClr}?text=${inputAll[0].value}`;

    myImg.src= urlpath;
    textArea.value = urlpath;
    e.target.style.backgroundColor = e.target.value;
    textArea.focus();
    textArea.select();

    navigator.clipboard.writeText(textArea.value).then(() => {
console.log("Text clip to clipboard")
    })
    .catch(err => {
        console.error("Error coping test", err)
    })
   
}


inputAll.forEach((currElm) => currElm.addEventListener('input', createImagepath));
select.addEventListener('change', createImagepath);




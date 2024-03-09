const copyBtn = document.querySelector('button')
const textarea = document.querySelector("textarea")

copyBtn.addEventListener('click' , ()=>{
    textarea.select()
    let textValue = textarea.value;
    navigator.clipboard.writeText(textValue)
    copyBtn.innerText='copied'

    setTimeout(() => {
    copyBtn.innerText='do copy'
    copyBtn.style.backgroundColor = '03a9f4'
    }, 1500);


})
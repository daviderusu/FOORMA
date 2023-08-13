const  form = document.querySelector("form"),
   nextBtn = form.querySelector(".nextBtn"),
   backBtn = form.querySelector(".backBtn"),
   allinput = form.querySelectorALL(".first input");

   nextBtn.addEventListener("click", ()=>{
    allinput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
        }else{
            form.classList.remove('secActive'); 
            /*alert("input is empty")*/
           
        }
    })
   })
   backBtn.addEventListener("click", () => form.classList.remove('secActive'));


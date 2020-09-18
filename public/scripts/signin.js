
let btRegister
let inputs
let login,signIn, formInput

window.addEventListener('load',()=>{
    btRegister = document.querySelector('#submit');
    inputs = Array.from(document.querySelectorAll('input'))
    login = document.querySelector("#login")
    signIn = document.querySelector("#signin")
    formInput = document.querySelector('#inputs')

    btRegister.addEventListener("click",()=>{
        if( inputs[2].value !== inputs[3].value ){
            alert("senhas diferentes.\nTente novamente.")
        }
        
    })

    login.addEventListener('click',()=>{
        if(window.location.pathname !== '/log-in')
            window.location.pathname = '/log-in'
        // if(login.classList[2] !== 'active' ){
        //     signIn.classList.toggle('active')
        //     login.classList.toggle('active')

        //     // formInput.innerHTML =`
        //     // <input type="text" id="username" required placeholder="Username">
        //     // <input type="password" id="password" required placeholder="Password">            
        //     // `
        //     // btRegister.textContent = 'Log In'

        // }
                

    })
    signIn.addEventListener('click',()=>{
        if(window.location.pathname !== '/sign-in')
            window.location.pathname = '/sign-in'
        // if(signIn.classList[2] !== 'active' ){
        //     signIn.classList.toggle('active')
        //     login.classList.toggle('active')

        //     // formInput.innerHTML =`
        //     // <input type="text" id="username" required placeholder="Username">
        //     // <input type="email" id="email" required placeholder="Email">
        //     // <input type="password" id="password" required placeholder="Password">
        //     // <input type="password" id='confirm' required placeholder="Confirm Password" >
        //     // `
        //     // btRegister.textContent = 'Register'
        // }  
    })

    window.setInterval(()=>{
        // console.log(inputs[3])
        if(inputs[2].value.length>0){
            inputs[3].disabled = false
        }else{
            inputs[3].disabled = true
        }
        if( inputs[2].value !== inputs[3].value){
            btRegister.type = 'button';
        }else {
            btRegister.type = 'submit';
        }
    },1500)
})


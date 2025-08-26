let inp1 = document.querySelector('.inp1')
let inp2 = document.querySelector('.inp2')
let btn = document.querySelector('.btn')



btn.addEventListener('click',()=>{
    if(inp1.value == 1 && inp2.value == 2){
        window.location.href = './index2.html'
        // alert('hi')
    }else{
        alert('error')
    }
})
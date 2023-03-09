const input= document.querySelector('.input');
const result= document.querySelectorAll('.result');
const btn= document.querySelectorAll('.btn');
const inputCel= document.querySelector('.inputCel');
const celcTem= document.querySelector('.celcTem');
const passSpeed = 3.6;
const velSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;
function  clac(distance,speed) {
    return  (distance/speed).toFixed(2)
}
btn[0].addEventListener("click", ()=>{
   result[0].innerHTML = `${clac(input.value,passSpeed)} hours`
   result[1].innerHTML = `${clac(input.value,velSpeed)} hours`
   result[2].innerHTML = `${clac(input.value,carSpeed)} hours`
   result[3].innerHTML = `${clac(input.value,planeSpeed)} hours`

})
btn[1].addEventListener("click",()=> {
    celcTem.innerHTML = `${inputCel.value*1.8 +32} F`
})
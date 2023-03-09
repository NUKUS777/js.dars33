const input= document.querySelector('input');
const result= document.querySelectorAll('.result');
const btn= document.querySelector('.btn');
const passSpeed = 3.6;
const velSpeed = 20.1;
const carSpeed = 70;
const planeSpeed = 800;
function  clac(distance,speed) {
    return  (distance/speed).toFixed(2)
}
btn.addEventListener("click", ()=>{
   result[0].innerHTML = `${clac(input.value,passSpeed)} hours`
   result[1].innerHTML = `${clac(input.value,velSpeed)} hours`
   result[2].innerHTML = `${clac(input.value,carSpeed)} hours`
   result[3].innerHTML = `${clac(input.value,planeSpeed)} hours`

})
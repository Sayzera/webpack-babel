
import './index.css'

const sayHello = () => {
  console.log('hello world')
}


sayHello();


document.querySelector('.helloBtn').addEventListener('click', () => {
  alert('Hello Btn Pressed')
});
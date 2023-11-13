import { useEffect } from 'react';
import './CalStyle.css';

// useEffect(() => {
//     const firstNumber=document.querySelector(".first-number")
//     const secondNumber=document.querySelector(".second-number")
//     const operation=document.querySelector(".operator")
//     const result=document.querySelector(".result")
//     const sumbit=document.querySelector(".submit")
    
    
//     let firstNumberValue;
//     let secondNumberValue;
//     let operatorValue;
    
//     firstNumber.addEventListener('input',function(event){
//         firstNumberValue=event.target.value;
//     })
//     secondNumber.addEventListener('input',function(event){
//         secondNumberValue=event.target.value;
    
//     })
//     operation.addEventListener('change',function(event){
//         operatorValue=event.target.value;
        
//     })
//     sumbit.addEventListener('click',function(event){
//         event.preventDefault();//من اجل ايقاف عملية ال refresh  لبتي تقوم بها ال form 
//         switch (operatorValue) {
//             case '+':result.innerHTML=Number( firstNumberValue) + Number( secondNumberValue);
//                 break;
//             case '-':result.innerHTML=Number( firstNumberValue) - Number( secondNumberValue);
//                 break;
//             case '*':result.innerHTML=Number( firstNumberValue) * Number( secondNumberValue);
//                 break;
//             case '/':result.innerHTML=Number( firstNumberValue) / Number( secondNumberValue);
//                 break;
        
//             default:
//                result.innerHTML=0;
//         }
//     })
// }, [])


const Cal = () => {
    useEffect(() => {
        const firstNumber=document.querySelector(".first-number")
        const secondNumber=document.querySelector(".second-number")
        const operation=document.querySelector(".operator")
        const result=document.querySelector(".result")
        const sumbit=document.querySelector(".submit")
        
        
        let firstNumberValue;
        let secondNumberValue;
        let operatorValue;
        
        firstNumber.addEventListener('input',function(event){
            firstNumberValue=event.target.value;
        })
        secondNumber.addEventListener('input',function(event){
            secondNumberValue=event.target.value;
        
        })
        operation.addEventListener('change',function(event){
            operatorValue=event.target.value;
            
        })
        sumbit.addEventListener('click',function(event){
            event.preventDefault();//من اجل ايقاف عملية ال refresh  لبتي تقوم بها ال form 
            switch (operatorValue) {
                case '+':result.innerHTML=Number( firstNumberValue) + Number( secondNumberValue);
                    break;
                case '-':result.innerHTML=Number( firstNumberValue) - Number( secondNumberValue);
                    break;
                case '*':result.innerHTML=Number( firstNumberValue) * Number( secondNumberValue);
                    break;
                case '/':result.innerHTML=Number( firstNumberValue) / Number( secondNumberValue);
                    break;
            
                default:result.innerHTML=0;
            }
        })
    }, [])
    
  return (
    <div>
        
        <div className="container app pt-5">
            <div className="father">
            <form className="form" id="form">
                <div className="firstN">
                <label>Enter Your First Number:</label>
                <input type="number" className="form-control first-number"/>
            </div>
            <div className="op">
                <select className="operator">
                    <option disabled selected></option>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
            </div>
            <div className="secondN">
                <label>Enter Your Second Number:</label>
                <input type="number" className="form-control second-number"/>
            </div>
            <button type="submit" className=" submit">Submit <i class="fa-solid fa-face-smile-wink"></i></button>
            </form>
            <div className="res">
                <p><i className="fa-solid fa-square-poll-vertical" ></i>Your Result  From This Operation That You Did It Is : <span class="result" id="result">0</span></p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cal
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { addGasStation, selectGasStation } from './store/GasStationSlice/GasStationSlice';
import GasStation from './components/GasStation/GasStation';
let answer = false

function App() {
  
  const {gasStation} = useSelector(selectGasStation)
  const dispatch = useDispatch()

  
  const handlerKeyDown = (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Enter") {
        e.preventDefault();
      } 
}

const handlerCompare =  ()  => {
  let startIndex = 0
  let galonLeft = 0
  for(let i = 0; i < gasStation.length; i++) {
    if(galonLeft < 0) {
      galonLeft = 0
      startIndex = i + 1
    }
    const newResult = {
      ...gasStation[i],
      availablegalon: gasStation[i].availablegalon + galonLeft
    }
    galonLeft = newResult.availablegalon - newResult.requiredgalon
    if(startIndex){
      for(let j = 0; j < startIndex - 1; j++) {
        const newResult = {
          ...gasStation[j],
          availablegalon: gasStation[j].availablegalon + galonLeft
        }
        galonLeft = newResult.availablegalon - newResult.requiredgalon
      }
    }
    if(galonLeft > 0) { 
      return startIndex === 0 ? startIndex + 1 : startIndex         
    } else {
      return "Impossible"
    }
  }
};
const handlerSubmit = (formData) => {
  const count = formData.get('gasStation')
  for(let i = 0; count > i; i++) {
    dispatch(addGasStation({
      id:crypto.randomUUID(),
      availablegalon: Math.trunc(Math.random() * 5),
      requiredgalon: Math.trunc(Math.random() * 5)
    }))
  }
  handlerCompare()
  answer = true
}

  
 
  return (
   <main>
    <h1>Gas Station</h1>
    <form action={handlerSubmit}>
    <input type="text" name='gasStation' onKeyDown={handlerKeyDown} />
    <button>Search</button>
    </form>
    <div className="container">
    {
      
      gasStation.map((el,index) => {
       return <GasStation key={el.id} station={el} count={index + 1}/>
      })
    }
    </div>
    <div>
      {
        answer && <p>Answer is {handlerCompare()}</p> 
      }
    </div>
   </main>
  )
}

export default App

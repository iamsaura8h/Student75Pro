import './App.css'
import AttendanceCalculator from './components/AttendanceCalculator'
import Calendar from './components/Calender'
import Description from './components/Description'

function App() {
 

  return (
    <>
    <div className='flex bg-blue-50 '>
      <Calendar />
      <AttendanceCalculator />
      <Description />
    </div>  
    </>
  )
}

export default App

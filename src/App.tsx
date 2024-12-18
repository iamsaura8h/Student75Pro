import './App.css'
import AttendanceCalculator from './components/AttendanceCalculator'
import Calendar from './components/Calender'

function App() {
 

  return (
    <>
    <div className='flex bg-blue-50'>
      <Calendar />
      <AttendanceCalculator />
    </div>  
    </>
  )
}

export default App

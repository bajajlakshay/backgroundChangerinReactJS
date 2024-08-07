import { useState } from "react"


function App() {

  const [color,setColor] = useState('#CC6CE7')


  return (
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
        
        <div className="fixed flex flex-wrap justify-center bottom-48 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 bg-white p-2 rounded-md">
          
          <button className="bg-red-600 p-3 rounded-md" onClick={()=>setColor("#dc2626")}>red</button>
          <button className="bg-blue-600 p-3 rounded-md" onClick={()=>setColor("#2563eb")}>blue</button>
          <button className="bg-pink-300 p-3 rounded-md" onClick={()=>setColor("#f9a8d4")}>Pink</button>
          <button className="bg-purple-700 p-3 rounded-md" onClick={()=>setColor("#7e22ce")}>Purple</button>
          <button className="bg-green-600 p-3 rounded-md" onClick={()=>setColor("#16a34a")}>Green</button>
          <button className="bg-yellow-300 p-3 rounded-md" onClick={()=>setColor("#fde047")}>Yellow</button>
        </div>
        </div>
      </div>
   
  )
}

export default App

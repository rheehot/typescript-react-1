import React, { useState } from 'react'

const TestView = (props: any) => {

  const [classRooms, setClassRooms] = useState<any[]>([
    { id: 1, className: 'Sons of Sun', studentCount: 12 },
    { id: 2, className: 'Blooming Volcanoes', studentCount: 10 },
    { id: 3, className: 'Pillaging Pirates', studentCount: 20 },
    { id: 4, className: 'Ping Bombs', studentCount: 8 },
  ])

  const [selectedClassId, setSelectedClassId] = useState<any>(null)

  const selectedClass = classRooms.find((classRoom: any) => {
    return classRoom.id === selectedClassId
  })

  const handleSelect = (id: any) => {
    setSelectedClassId(id)
  }

  const handleIncrease = (id: any) => {

    setClassRooms((prev: any) => {
      return prev.map((classRoom: any) => {
        if (classRoom.id === id) {
          return { ...classRoom, studentCount: classRoom.studentCount + 1 }
        } else return classRoom
      })
    })
  }


  

  return (
    <>
      <div>Test</div>
      <div className='container'>
        <div className='classRooms'>
          {classRooms.map((classRoom: any) => (
            <div className='classRoom'>
              <div className='text'>
                <h4>{classRoom.className}</h4>
                <h2>{classRoom.studentCount}</h2>
              </div>
              <button onClick={() => handleSelect(classRoom.id)}>Select</button>
              <button onClick={() => handleIncrease(classRoom.id)}>
                Increase Student
              </button>
            </div>
          ))}
        </div>

        <div className='selectedRoom'>
          <div className='classRoom'>
            <h4>Class Name : {selectedClass?.className}</h4>
            <h2> Student No : {selectedClass?.studentCount}</h2>
          </div>
        </div>
      </div>

    </>
  )

}

export default TestView
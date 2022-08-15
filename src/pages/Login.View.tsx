import React, { useEffect, useState } from 'react'

export default function LoginView(props: any) {

  /**
   * React에서 자주 실수하는 것.
   *
   * 1. React.Fragment 사용 안하기
   * 2. useState let으로 선언하기
   * 3. ()=>.. 사용 안 하기
   * 4. setState 비동기 자각
   * 5. 깊은 복사 활용 안 하기
   * 6. useState vs useReducer
   * 7. index key 할당하기
   * 8.
   */

  const [number, setNumber] = useState(0)
  const [input, setInput] = useState<any>('')

  const [user, setUser] = useState({
    name: 'kang',
    email: 'kang@gmail.com',
    tags: ['tag1.png', 'tag2.png'],
    images: {
      sm: '',
      md: '',
    },
    quantity: 0,
  })




  useEffect(() => {
    increaseNumber()
    //값이 뭐죠? 0 //setState 비동기라서,
  }, [])

  useEffect(() => {
    console.log('number', number)
  }, [number])


  const increaseNumber = () => {
    setNumber((number) => number + 1)
  }

  const increaseAsync = () => {
    setTimeout(() => {
      setNumber((currentNum) => currentNum + 1)
    }, 2000)
  }

  // const changeUserName = () =>{
  //     //setUser(user.name=input)
  //     setUser((prevState) =>({...prevState, name: input}))
  // }


  const handleChange = (e: any) => {
    setUser((prevState) => ({ ...prevState, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <form>
        <button onClick={increaseNumber}>Increase</button>
        <button onClick={increaseAsync}>Increase async</button>
        <div>{number}</div>
        <input type='text' onChange={handleChange} name="name" placeholder='enter name..' />
        <input type='text' onChange={handleChange} name="email" placeholder='enter email' />
        <p>Tags: </p>
        <textarea placeholder='Sepreatte tages with commas'></textarea>
        <div className="quantity">
          <button>-</button>
          <span>Quantity {user.quantity}</span>
          <button>+</button>

        </div>

      </form>
      <div>userName: {user.name}</div>
      <div>userEmail: {user.email}</div>

    </>
  )
}


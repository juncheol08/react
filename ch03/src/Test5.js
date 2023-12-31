// useContext : 상위 컴포넌트와 하위 컴포넌트 사이에서 데이터를 전달할 경우 활용하는 훅(hook)
import React from 'react'
import { AgeContext } from './AgeContext'
import { NameContext } from './NameContext'
import Header from './Header'

const Test5 = () => {
  return (
    <AgeContext.Provider value="28">
        <NameContext.Provider value="백준철">
    <div>
        <Header />
    </div>

        </NameContext.Provider>
    </AgeContext.Provider>
    
  )
}

export default Test5
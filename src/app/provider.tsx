'use client'

import { Provider } from 'react-redux'
import { store } from '@/store/store'
import { PropsWithChildren } from 'react'

const AppProvider = ({children}: PropsWithChildren) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default AppProvider
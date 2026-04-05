import { useState } from 'react'
import { LanguageContext } from '../Context/LanguageContext'

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const value = {
    language,
    setLanguage
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export default LanguageProvider

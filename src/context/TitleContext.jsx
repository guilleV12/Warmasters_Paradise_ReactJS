import { createContext, useEffect, useState } from "react";

const TitleContext = createContext()

const TitleProvider = ({ children }) => {
  const [title, setTitle] = useState('')
  const [isMenuVisible, setIsMenuVisible] = useState(false)

  useEffect(() => {
    const updateTitle = () => {
      const firstBlankSpaceIndx = document.title.indexOf(' ')

      if (firstBlankSpaceIndx !== -1) {
        setTitle(document.title.slice(0, firstBlankSpaceIndx))
      } else {
        setTitle(document.title)
      }
    }

    updateTitle()

    const observer = new MutationObserver(updateTitle)
    observer.observe(document.querySelector('title'), { childList: true })

    // Limpiar el observer cuando el componente se desmonte
    return () => {
      observer.disconnect();
    }

  }, [])

  const handleClickBurgerMenu = () => {
    setIsMenuVisible(!isMenuVisible)
  }

  const handleClickCloseMenu = () => {
    setIsMenuVisible(false)
  }

  return (
    <TitleContext.Provider value={{ title, handleClickBurgerMenu, isMenuVisible, handleClickCloseMenu }}>
      {children}
    </TitleContext.Provider>
  )
}

export {TitleContext, TitleProvider}
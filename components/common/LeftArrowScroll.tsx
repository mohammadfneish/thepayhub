'use client'
import NavigationArrowLeft from '@svg/navigationArrowLeft.svg'

function LeftArrowScroll({id = 'scrollable', cardSize = 350}: {id?: string, cardSize?: number}) {
  const handleClicked = () => {
    const div = document.getElementById(id)
    if (!div) return

    const scrollLeft = div.scrollLeft ?? 0
    const newScroll = scrollLeft - cardSize

    if (newScroll > 0) {
      div.scrollTo({
        left: newScroll,
        behavior: 'smooth',
      })
    } else {
      div.scrollTo({
        left: 0,
        behavior: 'smooth',
      })
    }
  }
  return (
    <span onClick={handleClicked} className="opacity-50 hover:opacity-100 cursor-pointer">
      <NavigationArrowLeft />
    </span>
  )
}

export default LeftArrowScroll

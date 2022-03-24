import { CaretCircleUp } from "phosphor-react";
import { useEffect, useState } from "react";
import Button from './Button';

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {showButton && (
        <div className='fixed bottom-6 right-6 z-50 transition-all'>
          <Button click={scrollToTop} secondary>
            <CaretCircleUp size={32} />
          </Button>
        </div>
      )}
    </>
  )
}
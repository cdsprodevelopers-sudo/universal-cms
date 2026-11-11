
'use client'

import { useEffect } from 'react'
import AOS from 'aos'

export default function AnimationProvider() {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    })

    // Load Bootstrap JavaScript only in the browser
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        console.log('Bootstrap JavaScript loaded successfully')
      })
      .catch((error) => {
        console.error('Bootstrap JavaScript loading failed:', error)
      })

    // Cleanup
    return () => {
      AOS.refresh()
    }
  }, [])

  return null
}

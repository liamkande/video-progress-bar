import {useEffect, useRef} from 'react'

export default function Video(): JSX.Element {
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const videoElement = document.querySelector('video')

    const updateProgressBar = () => {
      const progressPercent = ((videoElement?.currentTime ?? 0) / (videoElement?.duration ?? 1)) * 100
      if (progressBarRef.current)
        progressBarRef.current.style.width = `${progressPercent}%`
      requestAnimationFrame(updateProgressBar)
    }

    requestAnimationFrame(updateProgressBar)

    videoElement?.addEventListener('ended', () => {
      if (progressBarRef.current)
        progressBarRef.current.style.width = '0'
      videoElement.currentTime = 0
    });

    return () => {
      videoElement?.removeEventListener('ended', () => {
      })
    }
  }, [])

  return (
      <div className="wrapper">
        <video src="../demo.mov" autoPlay muted height="100%" width="100%"/>
        <div className="progress-bar" ref={progressBarRef}/>
      </div>
  )
}
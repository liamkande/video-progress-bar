export default function Video() {
  return (
    <div className="wrapper">
      <video src="../demo.mp4" autoPlay muted height="100%" width="100%" />
      <div className="progress-bar" />
    </div>
  )
}
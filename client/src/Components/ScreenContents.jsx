import About from './About';
import Projects from './Projects';
import "../CSS/ScreenContents.css"
export default function ScreenContents(props) {
  return (
    <div className="hidden"{...props}>
      <About />
      <Projects />
    </div>
  )
}
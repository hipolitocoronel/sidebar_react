import { MainHeader } from './MainHeader'
import { MainBody } from './MainBody'
import './style.css'

export const Main=({title, button})=>{
      return (
            <div className="main-content">
                  <MainHeader title={title} button={button}/>
                  <MainBody/>
            </div>
      )
}
import articalsStyles from '../styles/Articals.module.css'
import ArticalsItem from './ArticalsItem'
export default function Articals({ articals }) {
  return (
    <div>
    	{articals ? (articals.map((articale) => (<ArticalsItem articale={articale} />))) : <p>Loading...</p> }
    </div>
  )
}

import {Link} from 'react-router-dom'
import '../App.css'

function Navbar(){
	return(
		<div class="Navbar">
			<Link to="/">Home</Link>
			<Link to="profile">Profile</Link>
		</div>
		)

}
export default Navbar
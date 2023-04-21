import Button from './FormButton.jsx';
import '../styles/form.css';

export default function Form() {
    return (

        <form method="get" action="">
            <label htmlFor="VisitorName">Nom: </label>
            <input type="text" id="VisitorName" name="name" placeholder="DOE" required focus />
            <label htmlFor="VisitorFirstname">Prénom: </label>
            <input type="text" id="VisitorFirstname" name="firstname" placeholder="John" required />
            <label htmlFor="VisitorEmail">Email: </label>
            <input type="email" id="VisitorEmail" name="email" placeholder="JohnDoe@exemple.com" inputmode="" pattern="[a-z0-9._%+-/]+@[a-z0-9.-]+.[a-z]$" required />
            <Button />
        </form>
    )
}

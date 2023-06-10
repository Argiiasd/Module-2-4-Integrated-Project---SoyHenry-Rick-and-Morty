import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { NavLink } from 'react-router-dom'

const Nav = ({onSearch, setAccess, random}) => {

    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <div className={styles.NavGeneral}>
            <div className={styles.imgDiv}>
                <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19643055883023.5996f8afa3a8f.gif' alt='img' className={styles.RyMImg} />
            </div>
            <div className={styles.searchBarDiv}>
                <SearchBar onSearch={onSearch} />
            </div>
            <div className={styles.buttonsDiv}>
                <div className={styles.navButtons}>
                    <button onClick={random}>Random</button>
                    <NavLink to='/about' className={styles.navLinkButton}>About</NavLink>
                    <NavLink to='/home' className={styles.navLinkButton}>Home</NavLink>
                    <NavLink to='/favorites' className={styles.navLinkButton}>Favorites</NavLink>
                    <button onClick={handleLogOut}>Log Out</button>
                </div>
            </div>
        </div>
    )
}
export default Nav;


//paso por parametro setAccess, armo una func handleLogOut que llame setAccess (false)
//armo un boton que se renderice en el nav Log Out, con el onclick le paso handleLogOut
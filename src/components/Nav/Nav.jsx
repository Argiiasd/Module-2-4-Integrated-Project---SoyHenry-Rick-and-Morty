import SearchBar from '../SearchBar/SearchBar'
import styles from './Nav.module.css'
import { Link, NavLink } from 'react-router-dom'

const Nav = ({onSearch}) => {
    return(
        <div className={styles.NavStyle}>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19643055883023.5996f8afa3a8f.gif' className={styles.RyMImg}/>
            <SearchBar onSearch={onSearch}/>
            <div className={styles.navButtons}> 
                <button>
                    <NavLink to='/about'>About</NavLink>
                </button>
                <button>
                    <NavLink to='/home'>Home</NavLink>
                </button>
            </div>
        </div>
    )
}
export default Nav;
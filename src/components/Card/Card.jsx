import styles from './Card.module.css'
import { Link } from 'react-router-dom';

export default function Card(props) {
  const { character, onClose } = props;
  return (
    <div className={styles.divTarjeta}>

      <button onClick={() => { onClose(character.id) }} className={styles.closeBtn}>X</button>

      <div className={styles.divGif}>
        <img src={character.image} alt={character.name} />
      </div>

      <button className={styles.info}>
        <Link to={`/detail/${character.id}`} className={styles.linkStl} >
          <h3 className="card-name">{character.name}</h3>
        </Link>
      </button>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
    </div>
  );
}

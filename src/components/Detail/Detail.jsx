import styles from './Detail.module.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {
    const [character, setCharacter] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
    }, [id]);

    return (
        <div className={styles.container}>
            <div className={styles.image}>
                <img src={character.image} alt={character.name} />
            </div>
            <div className={styles.texts}>
                <h1 className={styles.bigName}>{character.name ? character.name : 'Nombre no disponible'}</h1>
                <p>Status: {character.status ? character.status : 'Status no disponible'}</p>
                <p>Specie: {character.species ? character.species : 'Especie no disponible'}</p>
                <p>Gender: {character.gender ? character.gender : 'Género no disponible'}</p>
                <p>Origin: {character.origin ? character.origin.name : 'Origen no disponible'}</p>
            </div>
        </div>
    );
}

export default Detail;
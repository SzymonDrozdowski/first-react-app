import styles from './Card.module.scss';
import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeCard, toggleCard } from '../../redux/cardsRedux';


const Card = ({title, id}) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const dispatch = useDispatch();

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
        dispatch(toggleCard(id, isFavorite));
    }

    const removeFavorite = () => {
        dispatch(removeCard(id));
    };

    return (
        <li className={styles.card}>{title}
            <div>
                <button className={styles.btn} onClick={toggleFavorite}><i className={clsx("fa fa-solid fa-star-o", isFavorite && styles.isFavorite)}></i></button>
                <button className={styles.btn} onClick={removeFavorite}><i className={clsx("fa fa-solid fa-trash")}></i></button>
            </div>
        </li>
    )
}

export default Card;
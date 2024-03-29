import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/cardsRedux';
import Card from '../Card/Card';
import PageTitle from '../PageTitle/PageTitle';
import styles from './Favorite.module.scss';

const Favorite = () => {
    
    const favoriteCards = useSelector(getFavoriteCards);
    
    return (
        <div className={styles.wrapper}>
            <PageTitle>Favorite</PageTitle>
            <div className={styles.column}>
                <ul className={styles.cards}>
                    {favoriteCards.map(card => <Card key={card.id} {...card}/>)}
                </ul>
            </div>
        </div>

    )
}

export default Favorite;
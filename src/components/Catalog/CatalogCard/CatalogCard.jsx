import { Link } from 'react-router'
import { PATH } from '../../../routing/Routing'
import s from './CatalogCard.module.css'
import tovarImg from '../../../assets/tovar1.png'

export function CatalogCard() {
    return (
        <article className={s.card}>
            <div className={s.imageWrap}>
                <img
                    src={tovarImg} 
                    alt="Товар"
                    className={s.image}
                    loading="lazy"
                />
            </div>
            <div className={s.body}>
                <p className={s.name}>Полноразмерные наушники Marshall, беспроводные, black</p>
                <div className={s.footer}>
                    <span className={s.price}>14 500 ₽</span>
                    <Link to={PATH.Product} className={s.buy}>
                        Купить
                    </Link>
                </div>
            </div>
        </article>
    )
}
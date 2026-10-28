import { Link } from 'react-router'
import s from './CatalogCard.module.css'

export function CatalogCard({ product }) {
    return (
        <article className={s.card}>
            <div className={s.imageWrap}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={s.image}
                    loading="lazy"
                />
            </div>
            <div className={s.body}>
                <h3 className={s.name}>{product.name}</h3>
                <p className={s.desc}>{product.desc}</p>
                <div className={s.footer}>
                    <span className={s.price}>{product.price.toLocaleString()} ₽</span>
                    <Link to={`/product/${product.id}`} className={s.buy}>
                        Купить
                    </Link>
                </div>
            </div>
        </article>
    )
}
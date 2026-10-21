import s from './ProductPage.module.css'
import { Link } from 'react-router'
import { PATH } from '../../routing/Routing'
import tovarImg from '../../assets/tovar1.png'

export function ProductPage() {
    return (
        <section className={s.page}>
      <div className={s.container}>
        <div className={s.layout}>
          <div className={s.gallery}>
            <div className={s.imageWrap}>
              <img src={tovarImg} alt="Товар" className={s.image} />
            </div>
          </div>

          <div className={s.info}>
            <h1 className={s.title}>Полноразмерные наушники Marshall, беспроводные, black</h1>
            <p className={s.desc}>
              Легендарный звук Marshall в беспроводном формате. Плотный бас, чистые верха, мягкие амбушюры для долгого прослушивания. До 30 часов автономности.
            </p>

            <div className={s.priceRow}>
              <span className={s.price}>14 500 ₽</span>
            </div>

            <Link to={PATH.NotFound} className={s.buy}>
              В корзину
            </Link>
          </div>
        </div>
      </div>
    </section>
    )
}
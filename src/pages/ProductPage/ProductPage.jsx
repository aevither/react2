import { useParams } from 'react-router'
import s from './ProductPage.module.css'
import { products } from '../../data/products'

export function ProductPage() {
    const { id } = useParams(); 
    const product = products.find(item => item.id === id); 

    if (!product) {
        return <h2 style={{textAlign: "center", padding: "50px"}}>Товар не найден</h2>
    }

    return(
        <section className={s.page}>
            <div className={s.container}>
                <div className={s.layout}>
                    <div className={s.gallery}>
                        <div className={s.imageWrap}>
                            <img src={product.image} alt={product.name} className={s.image} />
                        </div>
                    </div>

                    <div className={s.info}>
                        <h1 className={s.title}>{product.name}</h1>
                        <p className={s.desc}>{product.desc}</p>

                        <div className={s.priceRow}>
                            <span className={s.price}>{product.price.toLocaleString()} ₽</span>
                        </div>

                        <button type="button" className={s.buy}>
                            В корзину
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
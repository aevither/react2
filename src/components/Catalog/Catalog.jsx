import s from './Catalog.module.css'
import { CatalogCard } from './CatalogCard/CatalogCard'
import { products } from '../../data/products'

export function Catalog() {
    return (
        <div className={s.grid}>
            {products.map((product) => (
                <CatalogCard key={product.id} product={product} />
            ))}
        </div>
    );
}
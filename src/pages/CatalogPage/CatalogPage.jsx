import { Catalog } from "../../components/Catalog/Catalog"
import { Filters } from "../../components/Filters/Filters"
import s from "./CatalogPage.module.css"

export function CatalogPage() {
  return (
    <section className={s.catalog}>
      <div className="container">
        <h1 className={s.pageTitle}>Каталог</h1>
        
        <Filters />

        <Catalog />
      </div>
    </section>
  )
}
import s from "./Filters.module.css"

export function Filters() {
  return (
    <>
      <div className={s.categories}>
        <button className={`${s.category} ${s.active}`}>Все</button>
        <button className={s.category}>Аудиотехника</button>
        <button className={s.category}>Смартфоны и планшеты</button>
        <button className={s.category}>Аксессуары</button>
        <button className={s.category}>Новинки</button>
      </div>

      <div className={s.filters}>
        <div className={s.search}>
          <input type="text" placeholder="Поиск..." />
        </div>
        <input type="text" className={s.priceInput} placeholder="Цена от..." />
        <span className={s.priceDash}>—</span>
        <input type="text" className={s.priceInput} placeholder="Цена до..." />
        <select className={s.sort}>
          <option>Сортировка</option>
          <option>Сначала дешёвые</option>
          <option>Сначала дорогие</option>
        </select>
      </div>
    </>
  )
}
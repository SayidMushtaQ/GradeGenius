import style from '../styles/errornotfound.module.css'
export default function ErrorNotFount() {
  return (
    <div className={style.notFound}>
        <section className={style.notFoundHeader}>
          <h2>Oops! You Don&apos;t Have Any Grades Yet</h2>
          <p> It looks like your grade list is currently empty. Start adding your exam grades to track your academic progress with ease.</p>
        </section>
        <button className="bth-primary">Add</button>
    </div>
  )
}

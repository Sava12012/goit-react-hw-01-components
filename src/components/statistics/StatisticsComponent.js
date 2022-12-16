import PropTypes from 'prop-types';
import css from '../statistics/StatisticsComponent.module.css'
import getRandomColor from '../GetRandomColor'
export default function Statistics({ title, stats }) {
  return (
    <div>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statlist}>
          {stats.map(({ id, label, percentage }) => (
            <li className={css.item} key={id} style={{ backgroundColor: getRandomColor() }}>
              <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>
          ))}
      </ul>
      </section>
    </div>
  )
}

Statistics.propTypers = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })),
}
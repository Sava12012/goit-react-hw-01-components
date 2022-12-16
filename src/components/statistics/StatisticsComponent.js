import PropTypes from 'prop-types';
import css from '../statistics/StatisticsComponent.module.css'
import GetRandomColor from '../GetRandomColor'
export default function Statistics({ stats }) {
  return (
    <div>
      <section className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>

        <ul className={css.statlist}>
          {stats.map(({ id, label, percentage }) => (
            <li className={css.item} key={id} style={{ backgroundColor: GetRandomColor() }}>
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
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })),
}
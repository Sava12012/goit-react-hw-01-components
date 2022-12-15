import PropTypes from 'prop-types';
export default function Statistics({ stats }) {
  return (
    <div>
      <section class="statistics">
        <h2 class="title">Upload stats</h2>

        <ul class="stat-list">
          {stats.map(({ id, label, percentage }) => (
          <li class="item" key={id}>
            <span class="label">{label}</span>
            <span class="percentage">{percentage}%</span>
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
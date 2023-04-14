
import PropTypes from 'prop-types';
import css from '../Notification/Notification.module.css'; 
const Notification = (props) => {
  
    const { message } = props;
    return <p className={css.pagraph}>{message}!...</p>;
  }

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

import PropTypes from 'prop-types';
import css from '../FeedbackOptions/FeedbackOptions.module.css';


export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul className={css.list}>
            {options.map(key => {
                return (
                    <li key={key} >
                        <button className={css.button} type="button" name={key} onClick={onLeaveFeedback} >
                            {key}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.array,
    onLeaveFeedback: PropTypes.func,
};


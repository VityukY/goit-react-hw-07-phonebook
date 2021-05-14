import { connect } from 'react-redux';
import * as action from '../redux/actions';
import * as selectors from '../redux/contacts-selectors.js';

const Filter = ({ value, changeFilter }) => {
   return (
      <label className="phonebook__filter">
         Find contacts by name
         <input
            type="text"
            value={value}
            onChange={e => changeFilter(e.currentTarget.value)}
         />
      </label>
   );
};

const mapStateToProps = state => {
   return {
      value: selectors.getFilter(state),
   };
};

const mapDispatchToProps = dispatch => {
   return {
      changeFilter: value => dispatch(action.changeFilter(value)),
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);

import * as actions from './actions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export const fetchContacts = () => dispatch => {
   dispatch(actions.fetchContactRequest());

   axios
      .get('/contacts')
      .then(({ data }) => dispatch(actions.fetchContactSucces(data)))
      .catch(error => dispatch(actions.fetchContactError(error)));
};

export const addContact = contact => dispatch => {
   dispatch(actions.addContactRequest());

   axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(actions.addContactSucces(data)))
      .catch(error => dispatch(actions.addContactError(error)));
};

export const deleteContact = id => dispatch => {
   dispatch(actions.deleteContactRequest());

   axios
      .delete(`/contacts/${id}`)
      .then(() => dispatch(actions.deleteContactSucces(id)))
      .catch(error => dispatch(actions.deleteContactError(error)));
};

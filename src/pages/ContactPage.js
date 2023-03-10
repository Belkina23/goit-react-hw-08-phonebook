import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactsList from '../components/ContactsList/ContactsList';

import { selectIsLoading, selectError } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { AppStyled } from '../components/App/App.styled';

export const ContactPage = () => {

    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
  
    return (
  
      <AppStyled>
        <h1>Phonebook</h1>
        <ContactForm />
        <Filter />
        {isLoading && !error && `...Loading`}
        <ContactsList />
      </AppStyled>
  
    );
  };
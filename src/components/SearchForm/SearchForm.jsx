import { ErrorText, Field, Form, SearchFormButton } from './SearchForm.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import PropTypes from 'prop-types';

const schema = yup
  .object()
  .shape({
    query: yup
      .string()
      .max(30, 'Try making a shorter query')
      .lowercase()
      .required("You didn't enter anything!"),
  })
  .required();

export const SearchForm = ({ onSubmitForm }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Form onSubmit={handleSubmit(query => onSubmitForm(query))}>
      <Field type="text" {...register('query')} placeholder="Search movies" />
      <SearchFormButton type="submit">
        <AiOutlineSearch size="25px" />
      </SearchFormButton>
      <ErrorText>{errors.query?.message}</ErrorText>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};

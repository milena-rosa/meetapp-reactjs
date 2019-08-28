import React, { useEffect, useState, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import { useField } from '@rocketseat/unform';
import PropTypes from 'prop-types';

import { parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import 'react-datepicker/dist/react-datepicker.css';
import { Container } from './styles';

export default function DatePicker({ name, placeholder }) {
  const ref = useRef();
  const { fieldName, defaultValue, registerField } = useField(name);

  const initialValue = defaultValue ? parseISO(defaultValue) : null;

  const [selected, setSelected] = useState(initialValue);

  // workaround to show placeholder even if a value is selected
  const CustomInput = ({ value, onClick }) => (
    <input
      defaultValue={value}
      onClick={onClick}
      placeholder="Data do meetup"
    />
  );

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
    });
  }, [ref.current, fieldName]); //eslint-disable-line

  return (
    <Container>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        minDate={new Date()}
        locale={ptBR}
        showTimeSelect
        timeCaption="Horário"
        timeIntervals={30}
        timeFormat="HH'h'mm"
        dateFormat="d 'de' MMMM', às' HH'h'mm"
        customInput={<CustomInput />}
      />
    </Container>
  );
}

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

DatePicker.defaultProps = {
  placeholder: null,
};

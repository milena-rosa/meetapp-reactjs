import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';

import history from '~/services/history';
import api from '~/services/api';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';
import { Container } from './styles';

export default function MeetupForm() {
  const initialData = history.location.state.meetup;

  async function openDetails(id) {
    const response = await api.get(`meetups/${id}`);
    history.push('meetupInfo', { meetup: response.data });
  }

  async function handleSubmit(data) {
    // verify if it's a new meetup or an update.
    if (Object.keys(initialData).length === 0) {
      const response = await api.post('meetups', data);
      openDetails(response.data.id);
    } else {
      const response = await api.put(`meetups/${initialData.id}`, data);
      openDetails(response.data.id);
    }
  }

  return (
    <Container>
      <Form initialData={initialData} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />

        <Input name="title" placeholder="Título do meetup" />
        <Input
          name="description"
          id="description"
          placeholder="Descrição completa"
          multiline
        />

        <DatePicker name="date" placeholder="Data do meetup" />

        <Input name="location" placeholder="Localização" />

        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}

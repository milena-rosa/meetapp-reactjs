import React, { useEffect, useState } from 'react';
import { MdEdit, MdDeleteForever, MdEvent, MdLocationOn } from 'react-icons/md';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { Container } from './styles';
import banner from '~/assets/images/banner.png';

export default function MeetupInfo() {
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    const meetupInfo = history.location.state.meetup;
    setMeetup(meetupInfo);
  }, []);

  function handleEdit() {
    history.push('meetupForm', { meetup });
  }

  async function handleDelete() {
    const response = await api.delete(`meetups/${meetup.id}`);

    if (response.data.message === 'ok') {
      toast.success('Sua meetup foi cancelada com sucesso!');
    } else {
      toast.error('Algo deu errado!');
    }

    history.push('dashboard');
  }

  return (
    <Container>
      <header>
        <strong>{meetup.title}</strong>
        <div>
          <button id="editButton" type="button" onClick={handleEdit}>
            <MdEdit size={20} />
            Editar
          </button>
          <button id="cancelButton" type="button" onClick={handleDelete}>
            <MdDeleteForever size={20} />
            Cancelar
          </button>
        </div>
      </header>

      <main>
        <img src={meetup.file ? meetup.file.url : banner} alt="Banner" />

        <p>{meetup.description}</p>
      </main>

      <footer>
        <div>
          <MdEvent size={20} />
          {meetup.formattedDate}
        </div>
        <div>
          <MdLocationOn size={20} />
          {meetup.location}
        </div>
      </footer>
    </Container>
  );
}

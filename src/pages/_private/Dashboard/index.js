import React, { useEffect, useState } from 'react';
import {
  MdAddCircleOutline,
  MdChevronRight,
  MdChevronLeft,
} from 'react-icons/md';

import api from '~/services/api';
import history from '~/services/history';

import { Container, Meetup, PageActions } from './styles';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: { page },
      });

      setMeetups(response.data.data);
      setLastPage(response.data.lastPage);
    }

    loadMeetups();
  }, [page]);

  function handlePage(action) {
    if (action === 'prev') {
      setPage(page - 1);
    } else if (page <= lastPage) {
      setPage(page + 1);
    }
  }

  function handleNewMeetup() {
    history.push('/meetupForm', { meetup: {} });
  }

  async function openMeetupInfo(id) {
    const response = await api.get(`meetups/${id}`);
    history.push('meetupInfo', { meetup: response.data });
  }

  return (
    <Container>
      <header>
        <strong>Meus meetups</strong>
        <button type="button" onClick={handleNewMeetup}>
          <MdAddCircleOutline size={20} />
          Novo meetup
        </button>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>
            <div>
              <span>{meetup.formattedDate}</span>
              <button type="button" onClick={() => openMeetupInfo(meetup.id)}>
                <MdChevronRight size={24} color="#fff" />
              </button>
            </div>
          </Meetup>
        ))}
      </ul>

      <PageActions>
        <button
          type="button"
          disabled={page < 2}
          onClick={() => handlePage('prev')}
        >
          <MdChevronLeft size={30} />
        </button>
        <span>Página {page}</span>
        <button
          type="button"
          disabled={page === lastPage || lastPage === 0}
          onClick={() => handlePage('next')}
        >
          <MdChevronRight size={30} />
        </button>
      </PageActions>
    </Container>
  );
}

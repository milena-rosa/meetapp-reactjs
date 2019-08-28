import { all, call, put, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import { updateProfileSuccess, updateFailure } from './actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword !== '' ? rest : {}),
    };

    // PUT /users JSON: { name, email, ? oldPassword, ? password, ? password_confirmation}
    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso! ;)');

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    toast.error('Erro ao atualizar o perfil. Por favor, confira seus dados.');
    yield put(updateFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);

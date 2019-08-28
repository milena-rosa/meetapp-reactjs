import React, { useEffect, useState, useRef } from 'react';
import { MdPhotoCamera } from 'react-icons/md';
import { useField } from '@rocketseat/unform';

import api from '~/services/api';

import { Container, Content } from './styles';

export default function BannerInput() {
  const { defaultValue, registerField } = useField('file');

  const [file, setFile] = useState(defaultValue && defaultValue.id);
  const [preview, setPreview] = useState(defaultValue && defaultValue.url);

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      registerField({
        name: 'file_id',
        ref: ref.current,
        path: 'dataset.file',
      });
    }
  }, [ref]); // eslint-disable-line

  async function handleChange(e) {
    const data = new FormData();
    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);
    const { id, url } = response.data;

    setFile(id);
    setPreview(url);
  }

  return (
    <Container>
      <label htmlFor="file">
        <Content>
          {preview ? (
            <img src={preview} alt="" />
          ) : (
            <div>
              <MdPhotoCamera size={54} />
              <span>Selecionar imagem</span>
            </div>
          )}

          <input
            id="file"
            type="file"
            accept="image/*"
            data-file={file}
            onChange={handleChange}
            ref={ref}
          />
        </Content>
      </label>
    </Container>
  );
}

import React from 'react';
import { formatJsonText } from '../../../utils/formatting';
import './Info.scss';

type Props = {
  description: string;
  setIsModalOpen: (isModalOpen: boolean) => void;
};

export default function Info({ description, setIsModalOpen }: Props) {
  return (
    <div className='modal-info'>
      <article className='modal-info__article'>
        <button
          className='close-btn'
          onClick={() => {
            setIsModalOpen(false);
          }}
        >
          Close
        </button>
        <div className='description'>{formatJsonText(description)}</div>
      </article>
    </div>
  );
}

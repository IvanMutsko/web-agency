import React from 'react';
import Modal from 'react-modal';
import { AiOutlineClose } from 'react-icons/ai';

import { ButtonClose } from './ModalWindow.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#242424',
    padding: '30px',
    color: '#fff',
  },
  overlay: {
    backgroundColor: '#242424bd',
    zIndex: '5',
  },
};

Modal.setAppElement('#root');

const ModalWindow = ({ closeModal, modalIsOpen, children }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <ButtonClose onClick={closeModal}>
        <AiOutlineClose />
      </ButtonClose>
      {children}
    </Modal>
  );
};

export default ModalWindow;

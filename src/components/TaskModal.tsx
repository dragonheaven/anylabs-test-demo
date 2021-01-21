import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useTask } from '../context/taskContext';

interface TaskModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
  const [name, setName] = useState('');
  const { createTask } = useTask();

  const onSubmit = async () => {
    await createTask(name);

    setName('');

    onClose();
  };

  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      aria-labelledby='new-task-modal'
    >
      <Modal.Header closeButton>
        <Modal.Title id='new-task-modal'>
          New Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label>Name:</label>
        <input className='form-control' type='text' value={name} onChange={e => setName(e.target.value)} />
      </Modal.Body>
      <Modal.Footer>
        <button className='btn btn-primary' onClick={onSubmit}>
          Create
        </button>
        <button className='btn btn-danger' onClick={onClose}>Cancel</button>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskModal;

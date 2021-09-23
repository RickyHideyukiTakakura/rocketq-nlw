const Modal = () => {
  const modalWrapper = document.querySelector('.modal-wrapper')
  const cancelButton = document.querySelector('.button.cancel')

  const open = () => {
    //funcionalidade de atribuir a classe active para modal
    modalWrapper.classList.add('active')
  }

  const close = () => {
    //funcionalidade de remover a classe active na modal
    modalWrapper.classList.remove('active')
  }

  cancelButton.addEventListener('click', close)

  return {
    open,
    close
  }
}

export default Modal

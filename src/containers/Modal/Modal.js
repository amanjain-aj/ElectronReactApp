import './modal.css';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      <button type="button" style={{backgroundColor:'red',color:'white'}} onClick={handleClose}>
          X
        </button>
        {children}
        
      </section>
    </div>
  );
};

export default Modal
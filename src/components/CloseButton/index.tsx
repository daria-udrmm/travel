const CloseButton = ({ closeToast, ariaLabel }: any) =>  {
  return (
    <button
      onClick={e => {
        e.stopPropagation();
        closeToast(e);
      }}
      type="button"
      aria-label={ariaLabel}
      className="absolute top-0 right-0 mt-1 mr-2"
    >X</button>
  );
}

export default CloseButton;
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref){
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
            dialog.current.showModal();
        }}
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-800/90 p-5 rounded-md shadow-md">
            {children}
            <p className="text-xl">All the field/s must be filled!</p>
            <form method="dialog" className="flex justify-end mt-4">
                <button className="rounded-md py-1 px-2 bg-stone-950 text-white font-bold">{buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
})

export default Modal;
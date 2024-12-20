import Input from "./Input.jsx";
import Modal from "./Modal.jsx";
import { useRef, useState } from 'react';

export default function ProjectPopUp({ setMyArray, setBtnAddOn, myArray }) {

    const dialog = useRef();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dueDate, setDueDate] = useState("");

    function handleSave(e) {
        e.preventDefault();

        if (
            title.trim() === '' ||
            description.trim() === '' ||
            dueDate.trim() === ''
        ) {
            dialog.current.open();
            return;
        }

        const newProjectData = { title, description, dueDate, id: myArray.length + 1 };
        setMyArray((prev) => [...prev, newProjectData]);

        setTitle('');
        setDescription('');
        setDueDate('');

        setBtnAddOn(false);
    }


    function handleCancel() {
        setBtnAddOn(false);
    }

    return (
        <>
            <Modal ref={dialog} buttonCaption="Close">
                <h2 className="text-2xl text-center text-red-500 mb-4 font-bold">ERROR</h2>
            </Modal>
            <div className="px-8 py-16 w-2/3">
                <menu className="flex justify-end">

                    <li><button onClick={handleCancel} className="me-8 font-semibold px-4 py-2 rounded-md" type="submit" >Cancel</button></li>

                    <li><button onClick={handleSave} className="bg-black text-white font-semibold px-6 py-2 rounded-md disabled" type="submit" >Save</button></li>
                </menu>
                <menu>
                    <Input
                        title={'TITLE'}
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                    />
                    <Input
                        title={'DESCRIPTION'}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        type="textarea"
                    />
                    <Input
                        title={'DUE DATE'}
                        onChange={(e) => setDueDate(e.target.value)}
                        value={dueDate}
                        type="date"
                    />
                </menu>
            </div>
        </>
    )
}
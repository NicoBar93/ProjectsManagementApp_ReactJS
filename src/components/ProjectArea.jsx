import { useState, useRef } from "react";

export default function ProjectArea({ myArray, id, setMyArray, setId }) {
    const [arrayTask, setArrayTask] = useState([]);
    const [inputValue, setInputValue] = useState('');
    // const dialog = useRef();

    let filtered = [];

    if (id) {
        filtered = myArray.filter((item) => item.id === id);
    }

    function handleAddTask(e) {
        const newTask = inputValue;

        e.preventDefault();

        if (inputValue.trim() === '') {

            dialog.current.open();
            return;
        }

        setArrayTask((prev) => {
            const updatedArray = [...prev, newTask];
            return updatedArray;
        });

        setInputValue('');
    }

    function handleClearTask(index) {
        setArrayTask((prev) => {
            const updatedArray = prev.filter((_, i) => i !== index);
            return updatedArray;
        });
    }

    function deleteProject(id) {
        setMyArray((prev) => {
            const newArray = prev.filter((item) => item.id !== id)
            return newArray
        })
        setId('');
    }

    let content = 'This project does not have any tasks yet.';

    if (arrayTask.length) {
        content = <div className="bg-stone-200 mt-5 p-4 flex flex-col">
            {arrayTask.map((task, index) => (
                <div key={index} className="flex justify-between w-full">
                    <p className="w-11/12">{task}</p>
                    <button className="w-1/12" onClick={() => handleClearTask(index)}>Clear</button>
                </div>
            ))}
        </div>
    }

    return (<>
        {/* <Modal ref={dialog} buttonCaption="Close">
            <h2 className="text-2xl text-center text-red-500 mb-4 font-bold">ERROR</h2>
        </Modal> */}
        <div className="flex flex-col m-8 py-8 w-3/5">
            <div className="border-0 border-b-stone-300 border-b-2 pb-4 relative flex flex-col space-y-3 h-fit">
                <h2
                    className="font-bold text-black text-2xl"
                >
                    {filtered[0]?.title}
                </h2>
                <p
                    className="text-stone-500"
                >
                    {new Date(filtered[0]?.dueDate).toLocaleDateString()}
                </p>
                <p>
                    {filtered[0]?.description}
                </p>

                <button onClick={() => deleteProject(id)} className="absolute top-2 right-2">Delete</button>
            </div>
            <div className="mt-5">
                <h2
                    className="font-bold text-2xl"
                >
                    Tasks
                </h2>
                <div className="mb-3 py-4 flex">
                    <input
                        type="text"
                        className="bg-stone-300 me-5 px-3 py-1 w-72"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                    />
                    <button
                        onClick={handleAddTask}
                    >
                        Add Task
                    </button>
                </div>
            </div>
            {content}
        </div>
    </>
    )
}
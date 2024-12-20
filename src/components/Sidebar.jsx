import BtnAddProject from "./btnAddProject";
export default function Sidebar({ setBtnAddOn, myArray, setId, id, btnAddOn }) {

    function handleFilterId(id) {
        setId(id);
    }

    let classClassName = "btn text-stone-300 w-full text-start px-2 py-1.5";

    return (
        <aside className="w:1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects:</h2>
            <div>
                <BtnAddProject onClickEffect={() => setBtnAddOn(true)} bg="700" text="300">
                    + Add project
                </BtnAddProject>
            </div>
            <ul className="px-4 py-8 flex flex-col space-y-2">
                {myArray.map((project) => (
                    <li
                        key={project.id}
                        className="w-50"
                    >
                        <button
                            onClick={() => handleFilterId(project.id)} 
                            className={`${classClassName} ${(project.id === id && !btnAddOn) ? "bg-stone-800 text-stone-50" : ""}`}
                        >
                            {project.title}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

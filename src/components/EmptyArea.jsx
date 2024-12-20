import Logo from "../assets/no-projects.png";
import BtnAddProject from "./btnAddProject";
export default function EmptyArea({ setBtnAddOn }) {

    return (
        <div className="px-8 py-16 w-2/3 flex flex-col items-center">
            <img src={Logo} alt="Logo" className="w-16" />
            <h2 className="my-8 text-xl font-bold text-stone-600">No Project Selected</h2>
            <p className="mb-8">Select a project or get started with a new one</p>

            <BtnAddProject onClickEffect={() => setBtnAddOn(true)} bg="800" text="50">
                Create new project
            </BtnAddProject>
        </div>
    )
}

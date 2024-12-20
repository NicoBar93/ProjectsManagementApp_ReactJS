export default function BtnAddProject({ children, onClickEffect, bg, text}) {

    return (
        <button
            onClick={onClickEffect} 
            className={`px-4 py-2 text-xs md:text-base rounded-md bg-stone-${bg} text-stone-${text} hover:bg-stone-600 hover:text-stone-100`}
        >
            {children}
        </button>
    )
}
export default function Input({title, ...props}) {

    return (
        <p className="my-8 flex flex-col">
            <label className="font-bold text-stone-600 my-2">{title}</label>
            {title==='DESCRIPTION' ? (
                <textarea 
                    className="bg-stone-200 py-1 px-2 focus:outline-none focus:border-b-2 focus:border-b-stone-600" 
                    {...props}  
                ></textarea>
                ) : (
                <input 
                    className="bg-stone-200 py-1 px-2 focus:outline-none focus:border-b-2 focus:border-b-stone-600" 
                    {...props}  
                />
            )}
        </p>
    )
};

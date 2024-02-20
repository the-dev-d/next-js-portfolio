'use client';
import { useEffect, useState } from "react";


type OptionsPanelProps = {
    options: {
        name: string,
        iconTag: string,
        id: number
    }[]
}
type OSContent = {
    downloadURL: string,
    id: number,
    recommendation: string,
}

export const OptionsPanel: React.FC<OptionsPanelProps> = ({options}) => {

    const [selectedOS, setSelectedOS] = useState(1 as number | null);
    const [content, setContent] = useState(null as OSContent | null);

    useEffect(() => {
        if(selectedOS === null) return; 
        fetch(`https://api.dhaivathlal.in/os/${options[selectedOS].id}`)
        .then(res => res.json() as Promise<OSContent>)
        .then(data => {
            setContent(data);
        })
    }, [selectedOS])

    return (
        <section className="container w-full mx-auto grid p-3">
            <div className="grid border-2 border-emerald-500 rounded-md lg:flex h-[80vh] lg:h-[60vh] max-w-full grid-rows-min-grow">
                <div className="w-full lg:w-1/3 overflow-x-auto h-fit lg:h-full">
                    <div className="flex max-w-full lg:grid border-r-2 border-emerald-700">
                    {
                        options.map((option, index) => {
                            return (
                                <div onClick={() => {setSelectedOS(index)}} key={index} className={"p-6 gap-6 flex items-center hover:bg-emerald-800 hover:text-lg transition-all hover:text-white cursor-pointer " + ((selectedOS !== null && selectedOS == index) ? "bg-indigo-500/40" : "")}>
                                    <span className="text-2xl transition-all"><i className={`fl-${option.iconTag}`}></i></span>
                                    <span className="hidden lg:inline">{option.name}</span>
                                </div>
                            )
                        })
                    }
                    </div>
                </div>
                <div className="h-full lg:w-2/3 overflow-y-auto">
                    <div style={{display: 'grid', gridTemplateRows: 'min-content 1fr'}} className="w-full text-lg h-full">
                        <h2 className="bg-gradient-to-r from-emerald-600 to-emerald-300/40 p-6 bg-opacity-10">SELECTED OS  : {selectedOS !== null && options[selectedOS].name}</h2>
                        <div className="max-h-full bg-emerald-100/5 ">
                            <p className="lg:p-12 p-6 text-justify">
                                {content?.recommendation}
                            </p>
                            <div >
                                <a href={content?.downloadURL}>
                                    <button className="bg-gradient-to-tr m-6 mx-12 from-emerald-400 to-emerald-300 p-3 rounded-md shadow-md text-black">Download</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
 }

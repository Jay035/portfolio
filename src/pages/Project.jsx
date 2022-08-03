import React, { useEffect, useState } from 'react';
import { Card } from './ProjectCard';
import { ProjectList } from './ProjectList';
import { 
    AllWorks,
    ReactJSWorks, 
    VanillaJSWorks, 
    VanillaCSSWorks, 
    HTMLWorks, 
    TailwindCSSWorks  
} from './ProjectData';

export const Project = () => {
    const portfolioHeading = "<PORTFOLIO />";
    const [selected, setSelected] = useState("all")
    const [data, setData] = useState([])
    const list = [
        {
            id: "all",
            title: "All"
        },
        {
            id: "html",
            title: "HTML"
        },
        {
            id: "css",
            title: "CSS"
        },
        // {
        //     id: "sass",
        //     title: "SCSS/SASS"
        // },
        {
            id: "tailwindcss",
            title: "TailwindCSS"
        },
        {
            id: "vanillaJS",
            title: "Vanilla JS"
        },
        // {
        //     id: "api",
        //     title: "API"
        // },
        {
            id: "reactJS",
            title: "React JS"
        },
    ]
    useEffect(() => {
        switch(selected){
            case "all" : 
                setData(AllWorks);
                break;
            case "html" :
                setData(HTMLWorks);
                break;
            case "css" :
                setData(VanillaCSSWorks);
                break;
            case "tailwindcss" :
                setData(TailwindCSSWorks);
                break;
            case "vanillaJS" :
                setData(VanillaJSWorks);
                break;
            case "reactJS" :
                setData(ReactJSWorks);
                break;
                default:
                    setData(AllWorks)
        }
    }, [selected])

    return (
        <div id='portfolio' data-aos="fade-in" data-aos-duration="3000" className='relative bg-blackk text-light-grey bg-portfolio-Bg h-full bg-top overflow-hidden mt-[5.3rem]'>
            <div data-aos="fade-in" data-aos-duration="3000" className="container px-8 max-w-[900px] xl:max-w-[1200px] mx-auto backdrop-blur-sm">
                <h1 className='text-center text-3xl sm:text-4xl font-semibold pt-8 pb-10'>{portfolioHeading}</h1>
                <p className='font-medium text-lg'>Below are my works</p>
                {/* buttons */}
                <ul data-aos="fade-up" data-aos-duration="3000" data-aos-delay="500" className="flex gap-x-8 gap-y-3 overflow-x-hidden flex-wrap w-full mx-auto mt-8">
                    {list.map(item => (                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
                        <ProjectList 
                            key={item.id}
                            id={item.id} 
                            active={selected === item.id} 
                            setSelected={setSelected} 
                            title={item.title} 
                        />
                    ))}
                </ul>

                <section data-aos="fade-up" data-aos-duration="3000" className='grid place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6 items-center mt-10'>
                    {data.map(item => {
                        return(
                            <Card
                                key={item.id}
                                id={item.id}
                                item={item}
                            />
                        )
                    })}
                </section>
            </div>
            
        </div>
    )
}

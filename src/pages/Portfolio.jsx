import React, { useEffect, useState } from 'react';
import { Card } from './PortfolioCard';
import { PortfolioList } from './PortfolioList';
import { 
    AllWorks,
    ReactJSWorks, 
    VanillaJSWorks, 
    VanillaCSSWorks, 
    HTMLWorks, 
    TailwindCSSWorks  
} from './PortfolioData';

export const Portfolio = () => {
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
        <div id='portfolio' className='relative bg-blackk text-light-grey bg-portfolio-Bg h-full bg-top overflow-x-hidden mt-[5.3rem]'>
            <div data-aos="fade-in" data-aos-duration="3000" className="container px-8 max-w-[900px] xl:max-w-[1200px] mx-auto bg-blend-multiply bg-cover">
                <h1 className='text-center text-3xl sm:text-4xl font-semibold pt-8 pb-10'>{portfolioHeading}</h1>
                <p className='font-medium text-lg'>Below are my works</p>
                {/* buttons */}
                <ul className="flex gap-x-8 gap-y-3 overflow-x-hidden flex-wrap w-full mx-auto mt-8">
                    {list.map(item => (
                        <PortfolioList 
                            key={item.id}
                            id={item.id} 
                            active={selected === item.id} 
                            setSelected={setSelected} 
                            title={item.title} 
                        />
                    ))}
                    {/* <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>ALL</button>
                    <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>HTML</button>
                    <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>CSS</button>
                    <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>SCSS/SASS</button> */}
                    {/* <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>BOOTSTRAP</button> */}
                    {/* <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>TailwindCSS</button>
                    <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>Vanilla JS</button>
                    <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>API</button> */}
                    {/* <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>STYLED COMPONENTS</button> */}
                    {/* <button className='rounded-lg bg-light-grey/10 px-4 py-2 font-semibold tracking-wider'>React JS</button> */}
                </ul>

                <section className='grid place-content-center sm:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-6 items-center mt-10'>
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

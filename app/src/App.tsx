/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'

function App() {
    useEffect(() => {
        document.title = 'EXON'
    })

    return (
        <div>
            <div className="fixed container ml-10 mt-10 max-w-7xl h-screen flex flex-col items-start mx-auto px-4 md:px-12">
                <img src="./logo1.png" width="50px"></img>
            </div>
            <div className='max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
                <div className="container m-10">
                    <div>
                        <h1 className="text-4xl font-extralight"><span id="pink">import</span> <span id="red">EXON</span>;</h1>
                        <p className="text-2xl font-light"><span id="pink">let</span> Student_Developer<span id="green">:</span><span id="yellow"> UNCOMMON</span>;</p>
                    </div>
                    <div className="container mt-10">
                        <h1 className="text-4xl font-extralight"><span id="pink">class</span> <span id="yellow">Skills</span> &#123;</h1>
                        <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>Typescript <span id="green">=</span> <span id="orange">70%</span>;</p>
                        <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>Javascript <span id="green">=</span> <span id="orange">70%</span>;</p>
                        <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>C# <span id="green">=</span> <span id="orange">60%</span>;</p>
                        <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>C, C++ <span id="green">=</span> <span id="orange">60%</span>;</p>
                        <h1 className="text-4xl font-extralight">&#125;</h1>
                    </div>
                    <div className="container mt-10">
                        <h1 className="text-4xl font-extralight"><span id="pink">class</span> <span id="yellow">Project</span> &#123;</h1>
                        <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>GameWatcherBot<span id="green">:</span><span id="yellow"> DiscordBot</span> <span id="green">=</span> <span id="lightgreen">"Send message when your friends are gaming"</span>;</p>
                        <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>Desolved<span id="green">:</span><span id="yellow"> DiscordBot</span> <span id="green">=</span> <span id="lightgreen">"Show information about PS-Web like solved.ac, codeforces"</span>;</p>
                        <h1 className="text-4xl font-extralight">&#125;</h1>
                    </div>
                    <span className="arrow"></span>
                </div>
            </div>
            <div className='max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
                <div className="container m-10 ">
                    <div>
                        <h1 className="text-4xl font-extralight">I'm<span id=""> UNCOMMON</span> Student Developer <b><span id="pink">EXON</span></b></h1>
                        <p className="mt-1 text-2xl font-light"><li id="">I LOVE Progamming & Design</li></p>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
                <div className="container m-10 ">
                    <div>
                        <h1 className="text-4xl font-extralight"><b><span id="pink">Skills</span></b></h1>
                        <p className="mt-1 text-2xl font-light"><li id=""></li></p>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
                <div className="container m-10 ">
                    <div>
                        <h1 className="text-4xl font-extralight"><b><span id="pink">Projects</span></b></h1>
                        <p className="mt-1 text-2xl font-light"><li id=""></li></p>
                    </div>
                </div>
            </div>
        </div>
        
        
    )
}

export default App

/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

function App() {
    return (
        <div className='snap-start max-w-7xl h-screen flex flex-col items-start justify-center mx-auto px-4 md:px-12'>
            <div className="container m-10 ">
                <div>
                    <img id="logo"></img>
                    <h1 className="text-4xl font-extralight"><span id="pink">import</span> <span id="red">EXON</span>;</h1>
                    <p className="text-2xl font-light"><span id="pink">let</span> <span id="red">Student Developer</span><span id="green">:</span><span id="yellow"> UNCOMMON</span>;</p>
                </div>
                <div className="container mt-10">
                    <h1 className="text-4xl font-extralight"><span id="pink">class</span> <span id="yellow">Skills</span> &#123;</h1>
                    <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>Typescript <span id="green">=</span> <span id="orange">70%</span></p>
                    <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>Javascript <span id="green">=</span> <span id="orange">80%</span></p>
                    <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>C# <span id="green">=</span> <span id="orange">60%</span></p>
                    <p id="tap" className="text-2xl font-light">&#9;&#9;<span id="pink">static </span>C, C++ <span id="green">=</span> <span id="orange">60%</span></p>
                    <h1 className="text-4xl font-extralight">&#125;</h1>
                </div>
            </div>
        </div>
        
    )
}

export default App

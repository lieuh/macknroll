import React from 'react';
import "./App.css"
import Carousel from './components/Carousel';

function Home() {
    return (
        <>
        <div className="hero min-h-screen bg-[url('img/20220123_022353680_iOS.png')]">
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-secondary">hello hello</h1>
            <p className="mb-5 text-opacity-80 text-secondary">i'm mack. i'm an artist and computer science student from oregon!</p>
            <a href="/portfolio" className="btn btn-base-100">see my art</a>
            </div>
        </div>
        </div> 
        {/* <div className="hero bg-secondary mt-20 py-10 mx-auto grid max-w-auto grid-cols-1 gap-x-8 gap-y-16 text-center">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
            <h1 className="mb-5 font-bold text-neutral text-5xl">quick sample of what i do!</h1>  
            </div>
          </div>
        </div>  
        <Carousel/>
        <a href="/portfolio" className="btn justify-center btn-lg btn-secondary">see more</a>
        */}
        </>
    )
}

export default Home;
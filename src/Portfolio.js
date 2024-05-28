import './App.css';

function Portfolio() {
    return (
        <div>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl text-center">
                portfolio
                <small class="ms-2 font-semibold text-neutral">2018-present</small>
            </h1>
            <p class="mb-6 text-lg font-normal text-primary lg:text-xl sm:px-16 xl:px-48 text-center">
                a combination of personal/fan art, commissions, and works from my IB art portfolio...
            </p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4">
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/20220123_022353680_iOS.png")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/20220328_035241615_iOS.png")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/aert.png")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/20220309_175011000_iOS.jpg")} alt=""/>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/genshn....png")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/clairoo.png")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/IMG_2743.PNG")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/20211117_001536361_iOS.png")} alt=""/>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/IMG_2739.PNG")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/20220320_190620401_iOS.jpg")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/Screenshot_20211203-092154_2.png")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/IMG_2754.PNG")} alt=""/>
                </div>
            </div>
            <div class="grid gap-4">
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/20220525_054413218_iOS.png")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/IMG_2746.PNG")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/20220423_215520435_iOS.jpg")} alt=""/>
                </div>
                <div>
                    <img class="h-auto max-w-full rounded-lg" src={require("./img/A4E7B309-8B97-4A25-86F8-6F7BA254E00F.png")} alt=""/>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Portfolio;
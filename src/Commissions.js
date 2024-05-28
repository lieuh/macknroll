import './App.css';

function Commissions() {
    return (
        <div className="pt-12 pb-32 sm:pt-12 sm:pb-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center w-full">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white sm:text-3xl md:text-4xl lg:text-6xl text-center">
                    commissions
                    <small className="ms-2 font-semibold text-neutral"></small>
                </h1>
                <p className="mb-6 text-lg font-normal text-primary lg:text-xl sm:px-16 xl:px-48 text-center">
                    offering a variety of styles and choices to realize your creative ideas!
                </p>
                <p className="text-2xl">order your custom art here! please read each section carefully. thank you for your interest, it means a lot! :D
                    please contact me directly for non-human commissions (animals/pets, etc.)
                </p>
                <h2 className="mt-8 text-4xl font-bold tracking-tight text-white">commissions prices</h2>
                <p>*prices may change depending on complexity of the request. these are the starting prices for the requests :3</p>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">chibi commissions</h2>
                <p className='mb-8'>*chibis are drawn full body*</p>
                <div className="flex flex-wrap justify-center items-start mb-8">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <p className='font-bold mt-8'>one color: $15</p>
                        <img className="w-full mt-6" src={require("./img/IMG_2802.jpg")} alt=''></img>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <p className='font-bold mt-8'>flat color: $25</p>
                        <img className="w-full mt-6" src={require("./img/IMG_2801.jpg")} alt=''></img>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <p className='font-bold mt-8'>full color: $30</p>
                        <img className="w-full mt-6" src={require("./img/IMG_2806.jpg")} alt=''></img>
                    </div>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">sketch commissions</h2>
                <div className="flex flex-wrap justify-center items-start mb-8">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <p className='font-bold mt-8'>one color: half body and up: $15, full body: $20</p>
                        <img className="w-full mt-6" src={require("./img/IMG_2803.JPG")} alt=''></img>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <p className='font-bold mt-8'>flat color: half body and up: $25, full body: $30</p>
                        <img className="w-full mt-6" src={require("./img/IMG_2754.PNG")} alt=''></img>
                    </div>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">lined commissions</h2>
                <div className="flex flex-wrap justify-center items-start mb-8">
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <p className='font-bold mt-8'>one color: half body and up: $20, full body: $25</p>
                        <img className="w-full mt-6" src={require("./img/IMG_2751.PNG")} alt=''></img>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <p className='font-bold mt-8'>flat color: half body and up: $30, full body: $40</p>
                        <img className="w-full mt-6" src={require("./img/IMG_2804.JPG")} alt=''></img>
                    </div>
                    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <p className='font-bold mt-8'>full color: half body and up: $50, full body: $65</p>
                        <img className="w-full mt-6" src={require("./img/IMG_2739.PNG")} alt=''></img>
                    </div>
                </div>

                <h2 className="mt-16 text-2xl font-bold tracking-tight text-white">add-ons!</h2>
                <p>add another person: +(50% of the original order)</p>
                <p>block color background: free</p>
                <p>complex background: starting from +$5</p>

                <h2 className="mt-16 text-3xl font-bold tracking-tight text-white">payment</h2>
                <p>payment is done through venmo, paypal, or zelle. i can also send an invoice if you want to pay with debit/credit! (+2% card fee) (usd)<br></br>payment occurs when you approve the first draft (rough sketch). after this stage, cancellations will be refunded 50% of original payment.</p>

                <h2 className="mt-16 text-3xl font-bold tracking-tight text-white">terms of service</h2>
                <p><b>use:</b> commissions are for PERSONAL use only. uploading the commission to social media is allowed with credit. i reserve the right to reuse sketches and design elements that were rejected by the commissioner (including canceled commissions) for other commissions or personal works.</p>
                <br></br><p><b>time:</b> let me know BEFORE I start the commission if you need it by a certain date. this may affect the price of your order</p>
                <br></br><p><b>pricing: </b>i may change prices to reflect the complexity of the request</p>
                <p>if for any reason i cannot complete the commission, i will refund the full cost</p>
                <p>after i email the png/jpg file to you, the sale is considered complete and refunds will not be accepted</p>
                <div className="items-center flex justify-center mt-16">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSemO27N9sp5j1fNFet_HEcv-_KFu6D_bA-yzsE4h-y7nD20RQ/viewform?embedded=true" width="640" height="1645" frameborder="0" marginheight="0" marginwidth="0" title='commissionForm'>Loading…</iframe>
                </div>
            </div>
        </div>
    )
}

export default Commissions;

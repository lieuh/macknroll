import './App.css';

function About() {
    return (
        <div className='mx-10'>
      <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
      <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div className="lg:pr-4">
          <div className="lg:max-w-lg">
            <h1 className="mb-4 text-5xl mt-10 font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
              about me 
            </h1>
            <p className="mb-6 text-lg font-normal text-neutral lg:text-xl">
              artist, computer science major, and #1 silly guy
            </p>
            <p className=''>hi!! i'm a freelance artist attending oregon state university studying computer science. aside from drawing, i enjoy my fair share of video games, creating ux/ui for websites, and being a general nuisance.</p>
          </div>
        </div>
      </div>
      <div className="mt-6 p-6 lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 lg:w-[48rem] sm:w-[57rem]"
          src={require("./img/pro5.png")}
          alt=""
        />
      </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-white lg:max-w-lg">
            <h2 className="text-2xl font-bold tracking-tight text-neutral">so what's up with this dude?</h2>
                <p className='mt-5'> 
                i am passionate about drawing and being able to express the implications that arise from the inherent relationship between success and identity.
                i find that art is able to communicate what i can't put in words, as if it were a love language to give someone an entity conjured into existence just for them.
                it is my goal to provide that to people in my life both in person and online ^__^
                i am also passionate about putting guys in skirts
                </p>
              <ul className="mt-8 space-y-8 text-white">
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-neutral">social media..?</strong> <br></br>
                    <a href='https://instagram.com/macknrolll' target='_blank' rel='noopener noreferrer'>instagram</a><br />
                    <a href='https://tiktok.com/@macknrolll' target='_blank' rel='noopener noreferrer'>tiktok</a><br />
                    <a href='mailto:macknrollart@gmail.com'>email</a>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-neutral">past experience..?</strong> OSU ACM's graphic design officer (2024), BeaverHacks's graphic design officer (2024), featured in osu's prism art magazine (2023), herzog-meier senior art scholarship (2022), ib art diploma recipent (2022), beaverton city library's teen art show winner (2021). over 20+ clients for commissions.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-neutral">what to say..?</strong> talk to me about: league of legends, tft, kpop, stardew valley, human-computer interaction, ai ethics, fallout new vegas, your enneagram score. and most other things
                  </span>
                </li>
              </ul>
              <h2 className="mt-10 text-2xl font-bold tracking-tight text-neutral">what is currently up?</h2>
              <p className="mt-8 mb-10">
                in the process of applying for conventions (wasabicon - pdx), producing new merch designs (prints & stickers), and doing small commissions on the side...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default About;
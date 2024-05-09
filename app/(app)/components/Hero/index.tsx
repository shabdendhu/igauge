import React from 'react';

const Hero = () => {
  return (
    <div>
      <div className="w-96 h-96 relative">
        <div className="h-96 left-[100px] top-[43px] absolute justify-start items-start gap-48 inline-flex">
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
          <div className="w-96 h-px origin-top-left rotate-90 border-2 border-amber-500 border-opacity-10"></div>
        </div>
        <div className="w-96 left-[542px] top-[151px] absolute text-center text-black text-6xl font-bold font-['Libre Baskerville']">
          Looking for Best Institution?
        </div>
        <div className="w-96 left-[517px] top-[336px] absolute text-center text-black text-xl font-normal font-['Red Hat Text']">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.{' '}
        </div>
        <div className="w-96 h-20 left-[302px] top-[500px] absolute">
          <div className="w-96 h-56 left-[36px] top-[-16px] absolute" />
          <div className="w-96 h-20 left-[303px] top-0 absolute">
            <div className="w-96 h-20 left-[296px] top-0 absolute">
              <div className="w-96 h-20 left-0 top-0 absolute bg-white border-2 border-amber-500" />
              <div className="left-[58px] top-[26px] absolute text-zinc-700 text-xl font-normal font-['Red Hat Display']">
                Search for Institutions...
              </div>
            </div>
            <div className="w-64 h-20 left-[756px] top-0 absolute">
              <div className="w-64 h-20 left-0 top-0 absolute bg-amber-500" />
              <div className="left-[91px] top-[23px] absolute text-center text-black text-2xl font-normal font-['Red Hat Display']">
                Search
              </div>
            </div>
            <div className="w-72 h-20 left-0 top-0 absolute">
              <div className="w-72 h-20 left-0 top-0 absolute bg-white border-2 border-amber-500" />
              <div className="left-[21px] top-[26px] absolute text-zinc-700 text-xl font-normal font-['Red Hat Display']">
                Select Ratings
              </div>
            </div>
          </div>
          <div className="w-72 h-20 left-0 top-0 absolute">
            <div className="w-72 h-20 left-0 top-0 absolute bg-white border-2 border-amber-500" />
            <div className="left-[21px] top-[26px] absolute text-zinc-700 text-xl font-normal font-['Red Hat Display']">
              Select Institution
            </div>
          </div>
        </div>
        <div className="w-96 h-96 left-[-60px] top-[449.58px] absolute origin-top-left rotate-[-60deg]" />
        <img
          className="w-96 h-96 left-[1414px] top-[79px] absolute"
          src="https://via.placeholder.com/445x363"
        />
        <div className="w-96 h-36 left-[217px] top-[728px] absolute" />
        <div className="w-96 h-56 left-[232px] top-[704px] absolute">
          <div className="w-96 left-[328px] top-[14px] absolute text-center text-black text-3xl font-bold font-['Libre Baskerville']">
            {`Trusted by the world's leading Institutions`}
          </div>
          <div className="w-96 left-[174px] top-[99px] absolute justify-start items-center gap-24 inline-flex">
            <div className="pl-20 flex-col justify-center items-start gap-5 inline-flex">
              <div className="w-56 text-black text-6xl font-bold font-['Red Hat Text']">
                100+
              </div>
              <div className="text-black text-xl font-normal font-['Red Hat Text']">
                Schools
              </div>
            </div>
            <div className="pr-20 flex-col justify-center items-start gap-5 inline-flex">
              <div className="text-black text-6xl font-bold font-['Red Hat Text']">
                200+
              </div>
              <div className="text-black text-xl font-normal font-['Red Hat Text']">
                Collages
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-5 inline-flex">
              <div className="text-black text-6xl font-bold font-['Red Hat Text']">
                5k+
              </div>
              <div className="text-black text-xl font-normal font-['Red Hat Text']">
                Institutions Rated
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-5 inline-flex">
              <div className="text-black text-6xl font-bold font-['Red Hat Text']">
                20+
              </div>
              <div className="text-black text-xl font-normal font-['Red Hat Text']">
                Years QS Legacy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

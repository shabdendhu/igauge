import type { NextPage } from 'next';

const ShapeSplitter: NextPage = () => {
  return (
    <section className="mr-[-1px] self-stretch bg-white box-border flex flex-col items-start justify-start pt-[77px] px-[129px] pb-[30px] gap-[41px] max-w-full text-left text-5xl text-black font-red-hat-text border-[1px] border-solid border-whitesmoke-100 mq900:gap-[20px] mq900:pt-[50px] mq900:px-8 mq900:pb-5 mq900:box-border mq1275:pl-16 mq1275:pr-16 mq1275:box-border">
      <div className="w-[1920px] h-[582px] relative bg-white box-border hidden max-w-full border-t-[1px] border-solid border-whitesmoke-100" />
      <div className="w-[1631px] flex flex-row items-start justify-start py-0 px-1.5 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq900:flex-wrap">
          <img
            className="h-[72px] w-[225px] relative overflow-hidden shrink-0 z-[1]"
            alt=""
            src="/igaugeinvertedrgb-12.svg"
          />
          <div className="w-[390px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
              <img
                className="h-[50.4px] w-[50.4px] relative min-h-[50px] z-[1]"
                alt=""
                src="/frame-2-12.svg"
              />
              <img
                className="h-[50.4px] w-[50.4px] relative min-h-[50px] z-[1]"
                alt=""
                src="/frame-3-12.svg"
              />
              <img
                className="h-[50.4px] w-[50.4px] relative overflow-hidden shrink-0 min-h-[50px] z-[1]"
                alt=""
                src="/twitter-1-12.svg"
              />
              <img
                className="h-[50.4px] w-[50.4px] relative rounded-[132.65px] overflow-hidden shrink-0 min-h-[50px] z-[1]"
                alt=""
                src="/linkedin-12.svg"
              />
              <img
                className="h-[50.4px] w-[50.4px] relative rounded-[132.65px] overflow-hidden shrink-0 min-h-[50px] z-[1]"
                alt=""
                src="/youtube-12.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1638px] flex flex-row items-start justify-start pt-0 px-1 pb-[23px] box-border max-w-full text-darkslategray">
        <div className="flex-1 flex flex-col items-start justify-start gap-[47px] max-w-full mq900:gap-[23px]">
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-0.5 box-border max-w-full">
            <div className="flex-1 relative inline-block max-w-full z-[1] mq450:text-lgi">{`Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. `}</div>
          </div>
          <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
        </div>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-1 pb-[23px] box-border max-w-full font-red-hat-display">
        <div className="flex flex-row items-start justify-start gap-[43.3px] max-w-full z-[1] mq1600:flex-wrap mq900:gap-[22px]">
          <div className="relative mq450:text-lgi">About I-Gauge</div>
          <div className="relative mq450:text-lgi">University Rating</div>
          <div className="relative mq450:text-lgi">College Rating</div>
          <div className="relative mq450:text-lgi">Subject Rating</div>
          <div className="w-[197px] relative inline-block shrink-0 mq450:text-lgi">
            School Education
          </div>
          <div className="relative inline-block min-w-[66px] mq450:text-lgi">
            News
          </div>
          <div className="w-[92px] relative inline-block shrink-0 mq450:text-lgi">
            Events
          </div>
          <div className="w-[92px] relative inline-block shrink-0 mq450:text-lgi">
            Blogs
          </div>
        </div>
      </div>
      <div className="w-[1625px] flex flex-col items-end justify-start gap-[25px] max-w-full text-xl">
        <div className="self-stretch h-px relative box-border z-[1] border-t-[1px] border-solid border-whitesmoke-100" />
        <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0 box-border max-w-full">
            <div className="relative z-[1] mq450:text-base">
              © 2024 QS Quacquarelli Symonds Limited. All rights reserved.
            </div>
          </div>
          <div className="w-[487px] flex flex-row items-start justify-start gap-[56.5px] max-w-full z-[1] text-xl-9 font-red-hat-display mq900:flex-wrap mq900:gap-[28px]">
            <div className="relative inline-block min-w-[76px] mq450:text-mid">
              Cookies
            </div>
            <div className="relative inline-block min-w-[127px] mq450:text-mid">
              Privacy Policy
            </div>
            <div className="relative mq450:text-mid">{`Terms & Condition`}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShapeSplitter;

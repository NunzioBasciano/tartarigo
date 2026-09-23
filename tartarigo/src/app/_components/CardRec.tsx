interface CardRecProps {}

function CardRec({}: CardRecProps) {
  return (
    <section className="border border-primary/20 rounded-3xl py-6 px-4 flex flex-col lg:py-6 lg:px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="h-26.25 w-px bg-accent"></div>
        <p className="uppercase text-text-accent font-semi-bold text-[18px] leading-none tracking-[0.24em] text-center mb-2">
          our customer review
        </p>
      </div>

      <div className="flex flex-col items-end" aria-describedby="4 stelle su 5">
        <div className="flex gap-1">
          <img className="w-4 h4" src="/star.svg" alt="" aria-hidden="true" />
          <img className="w-4 h4" src="/star.svg" alt="" aria-hidden="true" />
          <img className="w-4 h4" src="/star.svg" alt="" aria-hidden="true" />
          <img className="w-4 h4" src="/star.svg" alt="" aria-hidden="true" />
          <img className="w-4 h4" src="/star.svg" alt="" aria-hidden="true" />
        </div>
        <p className="font-light text-[14px] leading-5 tracking-normal text-center md:leading-6 md:text-[16px]">
          “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>

        <div className="gap-4 mt-8 flex items-center justify-baseline">
          <div className="flex flex-col items-end gap-1">
            <cite className="not-italic font-forum font-normal text-[18px] leading-5 text-accent">
              Jackson Dean
            </cite>
            <span className="font-light text-[13px] leading-5">Guest</span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default CardRec;

interface CardRecProps {}

function CardRec({}: CardRecProps) {
  return (
    <section className="border border-primary/20 rounded-3xl py-6 px-4 flex flex-col lg:py-6 lg:px-6">
      <div className="flex flex-col items-center gap-4">
        <div className="h-26.25 w-px bg-accent"></div>
        <p className="uppercase text-text-accent font-semi-bold text-[18px] leading-none tracking-[0.24em] text-center mb-2">
          our customer review
        </p>
        {/*      <h3 className="font-forum font-normal text-[35px] leading-[1.26] tracking-normal text-center">
          What Our Client Says
        </h3> */}
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
            <cite className="not-italic font-forum font-normal text-[18px] leading-5 text-[#bf9766]">
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
/* 
 .sezione-sfondo-chiaro {
        text-align: center;
        padding: 48px 16px;
        display: flex;
        flex-direction: column;
        gap: 4px;
      }
      .pallino {
        width: 24px;
        height: 24px;
        background-color: brown;
        border-radius: 100%;
      }
      .up {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
      }
      .line {
        height: 105px;
        width: 1px;
        background-color: #bf9766;
      }

      .pre-title {
        font-family: "Poppins";
        font-weight: 300;
        font-style: Light;
        font-size: 18px;
        line-height: 100%;
        letter-spacing: 24%;
        text-align: center;
        text-transform: uppercase;
        color: #bf9766;
      }
      .up h3 {
        font-family: "Forum";
        font-weight: 400;
        font-style: Regular;
        font-size: 35px;

        line-height: 126%;
        letter-spacing: 0%;
        text-align: center;
      }
      .down {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;
      }
      .container-stars {
        display: flex;
        gap: 4px;
      }

      .container-stars img {
        width: 16px;
        height: 16px;
      }
      .user-cite {
        font-family: "Poppins";
        font-weight: 300;
        font-style: Light;
        font-size: 13px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: center;
      }
      .container-user {
        display: flex;
        gap: 4px;
        margin-top: 44px;
      }
      .container-user img {
        width: 48px;
        height: 48px;
        border: 3px solid #bf9766;
        border-radius: 100%;
        object-fit: cover;
      }
      cite {
        font-family: "Forum";
        font-weight: 400;
        font-style: Regular;
        font-size: 18px;
        line-height: 20px;
        letter-spacing: 0%;
        color: #bf9766;
        font-style: normal;
      }
      .container-user span {
        font-family: "Poppins";
        font-weight: 300;
        font-style: Light;
        font-size: 13px;
        line-height: 20px;
        letter-spacing: 0%;
      }
      .container-name {
        display: flex;
        flex-direction: column;
        align-items: baseline;
        gap: 4px;
      } */

const Footer = () => {
  return (
    <section className="bg-lime-600 text-white">
      <div className="w-4/5 mx-auto py-12">
        <div className="flex justify-between items-center gap-3 py-4 border-white border-t-[1px] border-b-[1px]">
          <div>
            <h6>PGDM & FSD programs (Online)</h6>
            <a href="tel:+91 9953621050">+91-9953621050</a>
          </div>
          <div>
            <h6>College Partnership</h6>
            <a href="tel:+91 9953522030">+91-9953522030</a>
          </div>
          <div>
            <h6>B2A (KLU)</h6>
            <a href="tel:+91 9953491020">+91-9953491020</a>
          </div>
          <div>
            <h6>ACCA UK</h6>
            <a href="tel:+91 9873281080">+91-9873281080</a>
          </div>
          <div>
            <h6>CMA USA</h6>
            <a href="tel:+91 9873271060">+91-9873271060</a>
          </div>
          <div>
            <h6>CPA USA</h6>
            <a href="tel:+91 9873271060">+91-9873271060</a>
          </div>
        </div>
        <div className="flex justify-between items-center py-4">
          <p>
            Copyright © 2024 Imarticus Learning Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex justify-center items-center gap-4">
            <span>Terms of Use</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

const Hero = () => {
  return (
    <main className="lg:w-[703px] flex flex-col gap-[21px] md:ml-[8px] mt-[100px]">
      <p className="text-[#64FFDA] font-fira">Salut, je m’appelle</p>
      <div className="flex flex-col">
        <h1 className="text-[44px] md:text-[55px] lg:text-[66px] font-fjalla text-[#CCD6F6] leading-normal">
          Baptiste Fortier.
        </h1>
        <h1 className="text-[44px] md:text-[55px] lg:text-[66px] font-fjalla text-[#8892C0] leading-normal">
          I’m a reactJS & Swift developer.
        </h1>
      </div>
      <p className="text-[#fff] text-[18px] md:text-[20px] font-fjalla">
        I’m a software engineer from Epitech specialized in building Web & IOS
        App. I also love designing them to create vibrant UI experiences. In the
        past few month I focused on personal project to upgrade my skills and be
        more efficiant.
        <br />
        <br />
      </p>
      <div className="w-full flex justify-center">
        <a
          href="https://res.cloudinary.com/dlszo5c4l/image/upload/v1701714157/Uploaded-resume_nmdyuh.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <button className="text-[#64FFDA] border-[0.5px] font-fira text-[14px] w-fit p-3 rounded-[5px] border-[#64FFDA] hover:bg-[#2b9179] hover:text-white hover:border-white ">
            Download my resume !
          </button>
        </a>
      </div>
    </main>
  );
};

export default Hero;

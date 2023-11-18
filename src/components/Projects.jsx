import { projects } from "../constatns";
const Projects = () => {
  return (
    <div>
      <div className="flex gap-4 items-center mb-20">
        <div className="flex gap-3 items-baseline ">
          <span className="text-[#64FFDA] font-fira text-[24px]">03.</span>
          <span className="text-[#fff] font-fira text-[32px]">My projects</span>
        </div>
        <div
          className="flex-grow h-[1px]"
          style={{
            background:
              "repeating-linear-gradient(to right, #64FFDA, #64FFDA 3px, transparent 5px, transparent 8px",
          }}
        ></div>
      </div>

      <div className="flex flex-wrap gap-[45px]">
        {projects.map((project, index) => {
          return (
            <div
              key={index}
              className="w-[330px] h-[380px] bg-[#112240] rounded-[5px] relative flex items-center "
            >
              <svg
                className="absolute top-[30px] left-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
              >
                <path
                  d="M33.3486 23.4283H24.9433C25.146 21.7205 25.2533 19.9041 25.2533 18.0218C25.2533 16.1395 25.146 14.3231 24.9433 12.6152H33.3486C33.9468 14.3063 34.2724 16.126 34.2724 18.0218C34.2724 19.9175 33.9468 21.7372 33.3486 23.4283ZM32.5849 25.2305C30.4376 29.5473 26.4221 32.7728 21.5952 33.8508C23.0006 31.9396 24.077 28.9018 24.6874 25.2305H32.5849ZM2.72762 23.4283C2.12938 21.7372 1.80386 19.9175 1.80386 18.0218C1.80386 16.126 2.12938 14.3063 2.72762 12.6152H11.133C10.9302 14.3231 10.8229 16.1395 10.8229 18.0218C10.8229 19.9041 10.9302 21.7205 11.133 23.4283H2.72762ZM3.49135 25.2305H11.3888C11.9993 28.9018 13.0757 31.9396 14.481 33.8508C9.65416 32.7728 5.63858 29.5473 3.49135 25.2305ZM23.1169 23.4283H12.9593C12.7457 21.7386 12.6267 19.9191 12.6267 18.0218C12.6267 16.1244 12.7457 14.305 12.9593 12.6152H23.1169C23.3305 14.305 23.4495 16.1244 23.4495 18.0218C23.4495 19.9191 23.3305 21.7386 23.1169 23.4283ZM22.8453 25.2305C21.9034 30.579 19.9897 34.2414 18.0381 34.2414C16.0865 34.2414 14.1729 30.579 13.2309 25.2305H22.8453ZM32.5849 10.8131H24.6874C24.077 7.14178 23.0006 4.10396 21.5952 2.19272C26.4221 3.27074 30.4376 6.49623 32.5849 10.8131ZM3.49135 10.8131C5.63858 6.49623 9.65416 3.27074 14.481 2.19272C13.0757 4.10396 11.9993 7.14178 11.3888 10.8131H3.49135ZM22.8453 10.8131H13.2309C14.1729 5.46451 16.0865 1.80218 18.0381 1.80218C19.9897 1.80218 21.9034 5.46451 22.8453 10.8131ZM18.0381 36.0435C28.0003 36.0435 36.0762 27.9749 36.0762 18.0218C36.0762 8.06862 28.0003 0 18.0381 0C8.07597 0 4.95911e-05 8.06862 4.95911e-05 18.0218C4.95911e-05 27.9749 8.07597 36.0435 18.0381 36.0435Z"
                  fill="#64FFDA"
                />
              </svg>
              <div className="flex flex-col justify-center mx-5">
                <h1 className="text-[#CCD6F6] text-[21px] font-fira font-[700] mb-4">
                  {project.title}
                </h1>
                <p className="text-[#A8B2D1] text-[17px] font-fira">
                  {project.desc}
                </p>
                <span className="text-[#C4C4C4] text-[14px] font-fira absolute bottom-[30px] left-5">
                  {project.tech}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

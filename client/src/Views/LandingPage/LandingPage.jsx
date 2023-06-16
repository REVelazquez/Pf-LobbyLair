import { Login } from "../../Views/index";

const LandingPage = () => {
  return (
    <div>
      <div className="flex text-black bg-gray-100 py-[0.5rem] h-[100vh] ">
        <div
          className="w-[60%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}>
          <img
            src="https://i.pinimg.com/564x/e2/ae/ba/e2aeba4354bad8808f067458d62ffb41.jpg"
            alt="img-login"
            width={1000}
            height={500}
            className="h-[100%] w-[80%] object-cover object-right rounded-r-3xl"
          />
        </div>

        <div className="flex flex-col gap-y-[1rem] justify-start w-[50%] pb-[2rem]">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

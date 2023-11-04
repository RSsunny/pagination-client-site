import img from "../../../public/images/blog-5.jpg";

const SectionOne = () => {
  return (
    <div className="flex justify-between mt-32 my-10 gap-10 items-center px-5 lg:px-0">
      <div className="flex-1">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col space-y-5 lg:space-y-10 flex-1">
        <h1 className="text-5xl font-bold ">
          Pagi<span className="text-red-500">nation</span>
        </h1>
        <p>
          To create an API for patching (partially updating) MongoDB documents,
          you can use a server-side programming language and framework like
          Node.js with Express. In this example, Ill show you how to create a
          basic API using Node.js, Express, and the mongodb package. Well focus
          on implementing a PATCH request to update specific fields of a MongoDB
          document.{" "}
        </p>
        <div>
          <button className="px-6 py-2 border border-red-500 text-red-500 mr-5 font-semibold">
            explor more
          </button>
          <button className="px-6 py-2 border font-semibold  ">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;

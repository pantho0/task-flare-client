import { useForm } from "react-hook-form";

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) =>{
    console.log(data);
    reset()
  }


  return (
    <div>
      <div className="px-4 py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          <div className="card">
            <div className="px-4 py-3 border-0 card-header">
              <h4 className="font-medium text-gray-800">Create Task</h4>
              <span className="text-white badge bg-primary">32 Total</span>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* title */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Task Title</span>
                </div>
                <input
                  type="text"
                  required
                  {...register("title", {required:true})}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
              </label>
              {/* description */}
              <label className="form-control w-full">
              <div className="label">
                  <span className="label-text">Task Description</span>
                </div>
              <textarea {...register("description", {required:true})} className="textarea textarea-warning w-full" placeholder="Bio"></textarea>
              </label>
              {/* Date */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Starting Date & Time</span>
                </div>
                <div className="flex gap-2">
                <input
                  type="date"
                  {...register("startDate", {required:true})}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <input
                  type="time"
                  {...register("startTime", {required:true})}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                </div>
              </label>
              {/* Deadline */}
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Deadline</span>
                </div>
                <div className="flex gap-2">
                <input
                  type="date"
                  {...register("endDate", {required:true})}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                <input
                  type="time"
                  {...register("endTime", {required:true})}
                  placeholder="Type here"
                  className="input input-bordered w-full"
                />
                </div>
              </label>
              <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                type="submit"
                value="Create"
              />
            </div>
            </form>
          </div>
          <div className="card">
            <div className="flex-1 p-6">
              <div className="flex items-center justify-center space-x-2">
                <div className="avatar">
                  <img src="/placeholder.jpg" alt="Photo of Praveen Juge" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-gray-900">
                    Praveen Juge
                  </h4>
                  <p className="text-sm font-medium leading-none text-gray-600">
                    CEO of Birds
                  </p>
                </div>
              </div>
              <div className="flex py-2 my-4 text-center border-t border-b border-gray-200 divide-x divide-gray-200">
                <div className="flex-1 p-2">
                  <h5 className="text-sm font-bold text-gray-900">200</h5>
                  <p className="text-sm font-medium leading-none text-gray-600">
                    Posts
                  </p>
                </div>
                <div className="flex-1 p-2">
                  <h5 className="text-sm font-bold text-gray-900">46</h5>
                  <p className="text-sm font-medium leading-none text-gray-600">
                    Comments
                  </p>
                </div>
                <div className="flex-1 p-2">
                  <h5 className="text-sm font-bold text-gray-900">12,340</h5>
                  <p className="text-sm font-medium leading-none text-gray-600">
                    Likes
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-800">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis laboriosam tempore eveniet consequatur impedit
                dolorem asperiores alias ex consectetur.
              </p>
            </div>
            <a
              href="#"
              className="justify-center px-4 py-3 text-sm font-medium text-purple-700 hover:text-purple-900 card-footer"
            >
              View Full Profile
            </a>
          </div>
          <div className="card">
            <nav className="tab">
              <a className="tab-link active" href="#">
                Location
              </a>
              <a className="tab-link" href="#">
                Income
              </a>
              <a className="tab-link" href="#">
                Age
              </a>
            </nav>
            <div className="flex-1 overflow-y-auto">
              <a
                href="#"
                className="flex items-center justify-between w-full px-4 py-2 bg-white hover:bg-gray-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="avatar avatar-xs">
                    <img src="/placeholder.jpg" alt="Photo of Praveen Juge" />
                  </div>
                  <p className="text-xs font-medium text-left text-gray-800">
                    Signed up from Chennai
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-4 h-4 text-gray-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 hover:bg-gray-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="avatar avatar-xs">
                    <img src="/placeholder.jpg" alt="Photo of Praveen Juge" />
                  </div>
                  <p className="text-xs font-medium text-left text-gray-800">
                    Opened Email from Antarctica
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-4 h-4 text-gray-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-between w-full px-4 py-2 bg-white hover:bg-gray-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="avatar avatar-xs">
                    <img src="/placeholder.jpg" alt="Photo of Praveen Juge" />
                  </div>
                  <p className="text-xs font-medium text-left text-gray-800">
                    Found a bird from India
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-4 h-4 text-gray-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="flex items-center justify-between w-full px-4 py-2 bg-gray-100 hover:bg-gray-200"
              >
                <div className="flex items-center space-x-2">
                  <div className="avatar avatar-xs">
                    <img src="/placeholder.jpg" alt="Photo of Praveen Juge" />
                  </div>
                  <p className="text-xs font-medium text-left text-gray-800">
                    Submitted New Post from Dubai
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-4 h-4 text-gray-600"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <a
              href="#"
              className="justify-between px-4 py-3 text-sm font-medium text-purple-700 hover:text-purple-900 card-footer"
            >
              <span>Full Report</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-4 h-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

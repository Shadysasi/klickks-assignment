import { FaGithub,FaLinkedin, } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const Dashboard = ({ user }) => {
  return (
    <div className="px-2 py-4 mt-16 flex flex-col justify-center items-center text-center">
      <h1 className="text-3xl font-bold mb-6">WELCOME TO DASHBOARD</h1>
      <img className="inline-flex object-cover border-4 border-indigo-600 rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-indigo-600/100 bg-indigo-50 text-indigo-600 h-48 w-48" 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080" 
            alt="PROFILE IMAGE"/>
      <h1 className="text-2xl text-gray-500 font-bold mt-2">
        {user.email}
      </h1>
      <p className="text-xl text-gray-500 font-bold mt-2">
        User ID: {user.id}
      </p>
      <h2 className="text-base md:text-xl text-gray-500 font-bold">
        Software Engineer @
        <a href="" target="_blank"
          className="text-indigo-900 hover:text-indigo-600 font-bold border-b-0 hover:border-b-4 hover:border-b-indigo-300 transition-all mb-2">
          XYZ
        </a>
      </h2>
      <ul className="flex flex-row mt-2">
        <li className="mx-2">
          <a href="" target="_blank" aria-label="GitHub">
            <FaGithub size={25}/>
          </a>
        </li>

        <li className="mx-2">
          <a href="" target="_blank" aria-label="LinkedIn">
            <FaLinkedin size={25}/>
          </a>
        </li>

        <li className="mx-2">
          <a href="" target="_blank" aria-label="Email">
            <MdOutlineAlternateEmail size={25}/>
          </a>
        </li>

      </ul>
    </div>
  );
};

export default Dashboard;
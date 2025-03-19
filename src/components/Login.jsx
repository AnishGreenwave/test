import companyicon from '../assets/logo.png';
import linkdinicon from '../assets/linkdinicon.png';
import websiteicon from '../assets/websiteicon.png';
import rightsideimage from '../assets/rightsideimage.png';

const Login = () => {
    return (
        <div className="bg-gray-950 flex  justify-center items-center min-h-screen">
            <div className="flex  w-3/5  ">
                {/* Left Box (Login Form) */}
                <div className="flex flex-col bg-gray-900 items-center w-1/2 p-4 rounded-lg shadow-xl overflow-hidden text-white">
                    <img src={companyicon} alt="Logo" className="w-24 mb-5" />
                    <h1 className="text-3xl font-semibold mb-6">Welcome</h1>
                    <input
                        type="email"
                        placeholder="Username *"
                        className="w-48 p-3 h-10 rounded border-1 focus:border-none border-gray-500 focus:ring-4 focus:ring-sky-500 mb-4 outline-none"
                    />
                    <input
                        type="password"
                        placeholder="Password *"
                        className="w-48 p-3 h-10 rounded border-1 focus:border-none border-gray-500 focus:ring-4 focus:ring-sky-500 mb-6 outline-none"
                    />
                    <button className="w-20 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition font-semibold">
                        Login
                    </button>
                    <div className='flex pt-6 gap-5'>
                        <img src={linkdinicon} alt="LinkedIn" className='w-10 border border-blue-500 rounded-full p-1 cursor-pointer hover:opacity-80'/>
                        <img src={websiteicon} alt="Website" className='w-10 border border-blue-500 rounded-full p-1 cursor-pointer hover:opacity-80' />
                    </div>
                </div>

                {/* Right Box */}
                <div className="w-4/5 flex justify-center items-center pl-32">
                    <img src={rightsideimage} alt="Illustration" className="w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Login;

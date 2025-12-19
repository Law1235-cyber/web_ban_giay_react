const Register = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-xl overflow-hidden">
        
        {/* Header: Giảm padding vertical (py-4 thay vì py-6) */}
        <div className="bg-black text-white px-6 py-4 relative">
          
          {/* Nút Quay lại */}
          <a 
            href="/" 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-100 hover:text-white hover:bg-blue-500 p-2 rounded-full transition-all duration-200"
            title="Back to Home"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </a>

          <h2 className="text-2xl font-bold text-white text-center">Create Account</h2>
        </div>

        {/* Nội dung Form: Giảm padding (p-6 thay vì p-8) */}
        <div className="p-6">
          <form onSubmit={(e) => e.preventDefault()}>
            
            {/* Hàng 1: Họ tên và Email (Chia 2 cột trên màn hình lớn) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="fullname">
                  Full Name
                </label>
                <input 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  id="fullname" type="text" placeholder="Nguyễn Văn A"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="email">
                  Email
                </label>
                <input 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  id="email" type="email" placeholder="email@example.com"
                />
              </div>
            </div>

            {/* Hàng 2: Mật khẩu và Xác nhận mật khẩu (Chia 2 cột) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="password">
                  Password
                </label>
                <input 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  id="password" type="password" placeholder="Min 8 chars"
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-semibold mb-1" htmlFor="confirm-password">
                  Confirm
                </label>
                <input 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  id="confirm-password" type="password" placeholder="Re-enter password"
                />
              </div>
            </div>

            {/* Checkbox: Giảm margin bottom */}
            <div className="flex items-center mb-4">
              <input 
                id="terms" type="checkbox" 
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" 
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                Agree to <a href="#" className="text-blue-600 hover:underline">Terms</a> & <a href="#" className="text-blue-600 hover:underline">Policy</a>.
              </label>
            </div>

            {/* Nút Đăng ký */}
            <button 
              className="w-full bg-black hover:bg-blue-700 text-white font-bold py-2.5 px-4 rounded-lg shadow hover:shadow-md transition duration-200" 
              type="submit"
            >
              Register
            </button>
          </form>

          {/* Social Register: Giảm margin top */}
          <div className="mt-5">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white text-gray-500 uppercase">Or</span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
                <span className="ml-2">Google</span>
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition">
                 <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
                <span className="ml-2">Facebook</span>
              </button>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Already have an account? <a href="/login" className="font-medium text-blue-600 hover:underline">Login</a>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Register;
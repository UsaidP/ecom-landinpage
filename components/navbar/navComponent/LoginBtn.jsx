import { useState } from "react";
import { Button } from "../../index";
import { FaChevronDown } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";

function LoginBtn() {
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  const handleMouseEnter = () => setIsButtonHovered(true);
  const handleMouseLeave = () => {
    setTimeout(() => {
      if (!isMenuHovered) {
        setIsButtonHovered(false);
      }
    }, 100);
  };

  const handleMenuMouseEnter = () => setIsMenuHovered(true);
  const handleMenuMouseLeave = () => {
    setIsMenuHovered(false);
    setIsButtonHovered(false);
  };

  return (
    <div className='relative items-center  p-2  hover:bg-blue-800 rounded-md hover:text-white'>
      <div
        className='flex  items-center'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <RxAvatar className='text-xl mx-2 ' />
        <Button className='flex '>
          Login
          <FaChevronDown className='ml-2 content-center' />
        </Button>
      </div>
      {(isButtonHovered || isMenuHovered) && (
        <div
          className='absolute top-full rounded-b-md rounded-t-sm shadow-lg left-0 w-72 bg-white border   z-10'
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          <div className='flex items-center px-4 py-2 justify-between mx-1'>
            <a href='#' className='block  text-gray-800 hover:bg-gray-200'>
              New Customer
            </a>
            <Button className={"text-blue-800"}>Sign Up</Button>
          </div>
          <div className='flex  px-3 py-2'>
            <a href='#' className='flex  text-gray-800 hover:bg-gray-200'>
              <RxAvatar className='m-1 content-center' />
              <p className='text-sm'>My Profile</p>
            </a>
          </div>
          <div className='flex px-3 '>
            <a
              href='#'
              className='flex items-center text-gray-800 hover:bg-gray-200'
            >
              <div className='flex m-1'>
                <a
                  href='#'
                  className='flex items-center text-gray-800 hover:bg-gray-200'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width={12}
                    height={12}
                    viewBox='0 0 24 24'
                    fill='none'
                  >
                    <path
                      d='M21 16.621V7.37727C20.9993 7.24374 20.9634 7.11277 20.8959 6.99755C20.8284 6.88234 20.7317 6.78695 20.6156 6.72102L12.3656 2.08039C12.2545 2.01621 12.1284 1.98242 12 1.98242C11.8716 1.98242 11.7455 2.01621 11.6344 2.08039L3.38437 6.72102C3.26827 6.78695 3.1716 6.88234 3.10411 6.99755C3.03663 7.11277 3.00072 7.24374 3 7.37727V16.621C3.00072 16.7545 3.03663 16.8855 3.10411 17.0007C3.1716 17.1159 3.26827 17.2113 3.38437 17.2773L11.6344 21.9179C11.7455 21.9821 11.8716 22.0159 12 22.0159C12.1284 22.0159 12.2545 21.9821 12.3656 21.9179L20.6156 17.2773C20.7317 17.2113 20.8284 17.1159 20.8959 17.0007C20.9634 16.8855 20.9993 16.7545 21 16.621V16.621Z'
                      stroke={"black"}
                      strokeWidth='1.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16.5938 14.2959V9.4209L7.5 4.40527'
                      stroke={"black"}
                      strokeWidth='1.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M20.8973 6.99316L12.0848 11.9994L3.10352 6.99316'
                      stroke={"black"}
                      strokeWidth='1.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12.0844 11.999L12 22.0115'
                      stroke={"black"}
                      strokeWidth='1.4'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <p className='text-sm mx-2'>Orders</p>
                </a>
              </div>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginBtn;

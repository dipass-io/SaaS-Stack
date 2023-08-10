const ContentFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto max-w-[1920px] px-6 bg-white-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-b border-zinc-600 py-12 text-zinc transition-colors duration-150 bg-white-900">
        <div className="col-span-1 lg:col-span-2"></div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <a className="text-gray hover:text-zinc-200 transition ease-in-out duration-150">
                Home
              </a>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a className="text-gray hover:text-zinc-200 transition ease-in-out duration-150">
                About
              </a>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a className="text-gray hover:text-zinc-200 transition ease-in-out duration-150">
                Careers
              </a>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a className="text-gray hover:text-zinc-200 transition ease-in-out duration-150">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-initial flex-col md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="text-gray font-bold hover:text-zinc-200 transition ease-in-out duration-150">
                Legal
              </p>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a className="text-gray hover:text-zinc-200 transition ease-in-out duration-150">
                Privacy Policy
              </a>
            </li>
            <li className="py-3 md:py-0 md:pb-4">
              <a className="text-gray hover:text-zinc-200 transition ease-in-out duration-150">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-6 flex items-start lg:justify-end text-white">
          <div className="flex space-x-6 items-center h-10">
            <a
              aria-label="Github Repository"
              href="https://github.com/vercel/nextjs-subscription-payments"
            ></a>
          </div>
        </div>
      </div>
      <div className="py-12 flex flex-col md:flex-row justify-between items-center space-y-4 bg-light-900">
        <div>
          <span>&copy; 2023 Dipassio S.L. All rights reserved.</span>
        </div>
        <div className="flex items-center">
          <span className="text-black">Crafted by</span>
          <a href="https://www.dipass.io" aria-label="Dipass.io Link">
            <img
              src="/rhinologo-BLACK.svg"
              alt="Dipass.io Logo"
              className="inline-block h-6 ml-4 text-"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default ContentFooter;

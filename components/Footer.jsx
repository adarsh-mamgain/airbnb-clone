import Image from "next/image";

// todo: create a popover for each links on the right
export default function Footer() {
  return (
    <footer className="bg-white sticky w-full absolute bottom-0">
      <div className="flex justify-between items-center text-sm border-t border-neutral-200 text-neutral-800 px-20 py-3.5">
        <div className="font-light">
          <span>&copy; 2022 Airbnb, Inc.</span>
          <span className="middot px-2">&middot;</span>
          <a href="" className="hover:underline">
            Privacy
          </a>
          <span className="middot px-2">&middot;</span>
          <a href="" className="hover:underline">
            Terms
          </a>
          <span className="middot px-2">&middot;</span>
          <a href="" className="hover:underline">
            Sitemap
          </a>
          <span className="middot px-2">&middot;</span>
          <a href="" className="hover:underline">
            Company details
          </a>
          <span className="middot px-2">&middot;</span>
          <a href="" className="hover:underline">
            Destinations
          </a>
        </div>
        <div className="flex font-medium">
          <button className="inline-flex items-center px-3.5">
            <Image src="/world.svg" alt="world" width={16} height={16} />
            <span className="hover:underline pl-1">English (IN)</span>
          </button>
          <button className="px-3.5">
            ₹ <span className="hover:underline">INR</span>
          </button>
          <button className="inline-flex items-center px-3.5">
            <span className="hover:underline pr-1">Support & resources</span>
            <Image src="/arrow-up.svg" alt="arrow-up" width={16} height={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}

import Image from "next/image";

function List() {
  return (
    <div className="flex items-center gap-10 text-zinc-500">
      <div className="flex flex-col items-center gap-1 mt-3 pt-1 mb-3.5">
        <button>
          <Image src="/pool.jpeg" alt="pool" width={24} height={24} />
        </button>
        <div>
          <span className="block">Amazing pools</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-3 pt-1 mb-3.5">
        <button>
          <Image src="/island.jpeg" alt="island" width={24} height={24} />
        </button>
        <div>
          <span className="block">Islands</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-3 pt-1 mb-3.5">
        <button>
          <Image src="/beach.jpeg" alt="pool" width={24} height={24} />
        </button>
        <div>
          <span className="block">Beaches</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-3 pt-1 mb-3.5">
        <button>
          <Image src="/pool.jpeg" alt="pool" width={24} height={24} />
        </button>
        <div>
          <span className="block">Amazing pools</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-3 pt-1 mb-3.5">
        <button>
          <Image src="/island.jpeg" alt="island" width={24} height={24} />
        </button>
        <div>
          <span className="block">Islands</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-3 pt-1 mb-3.5">
        <button>
          <Image src="/beach.jpeg" alt="pool" width={24} height={24} />
        </button>
        <div>
          <span className="block">Beaches</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-3 pt-1 mb-3.5">
        <button>
          <Image src="/pool.jpeg" alt="pool" width={24} height={24} />
        </button>
        <div>
          <span className="block">Amazing pools</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-3 pt-1 mb-3.5">
        <button>
          <Image src="/island.jpeg" alt="island" width={24} height={24} />
        </button>
        <div>
          <span className="block">Islands</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 mt-3 pt-1 mb-3.5">
        <button>
          <Image src="/beach.jpeg" alt="pool" width={24} height={24} />
        </button>
        <div>
          <span className="block">Beaches</span>
        </div>
      </div>
    </div>
  );
}

// todo: create a popover for buttons
// todo: create slider, add filters
// todo: add shadow
export default function Header() {
  return (
    <header className="z-10 bg-white sticky absolute top-0">
      <div className="grid grid-cols-3 justify-between items-center border-b border-neutral-200 text-sm font-medium py-4 px-20">
        <div>
          <a href="">
            <Image src="/logo.svg" alt="Airbnb Logo" width={102} height={32} />
          </a>
        </div>
        <div className="flex items-center w-fit border border-neutral-200 rounded-full divide-x m-auto shadow hover:shadow-md">
          <button>
            <div className="px-4">Anywhere</div>
          </button>
          <button>
            <div className="px-4">Any week</div>
          </button>
          <button className="inline-flex items-center">
            <div className="text-zinc-500 font-light px-4">Add guests</div>
            <div className="w-8 h-8 bg-[#FF385C] rounded-full my-2 mr-2 p-1.5">
              <Image src="/search.svg" alt="search" width={12} height={12} />
            </div>
          </button>
        </div>
        <div className="flex items-center h-fit ml-auto">
          <button className="hover:bg-gray-100 rounded-full p-3">
            Become a host
          </button>
          <button className="inline-flex h-fit hover:bg-gray-100 rounded-full px-4 py-3.5 mr-2 m-auto">
            <Image src="/world.svg" alt="world" width={16} height={16} />
          </button>
          <button className="inline-flex jusitfy-center items-center gap-3 border rounded-full p-1.5 pl-3 hover:shadow-md">
            <Image src="/menu.svg" alt="menu" width={16} height={16} />
            <Image src="/user.svg" alt="user" width={30} height={30} />
          </button>
        </div>
      </div>

      <div className="flex items-center gap-10 text-xs font-medium px-20 pt-5">
        <List />
        <div>
          <button className="inline-flex gap-2 font-medium border rounded-lg p-4">
            <Image src="/filter.svg" alt="filter" width={16} height={16} />
            Filters
          </button>
        </div>
      </div>
    </header>
  );
}

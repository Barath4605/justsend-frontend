import React from 'react';

const BookmarkItem = ({title, code}) => {
  return (
    <main className="text-white p-1 rounded-xl bg-linear-to-tr m-2
                      from-zinc-800  via-zinc-800 to-gray-900 font-family-[Montserrat]
                      ">
      <div className="flex justify-end">
        <h1 className=" cursor-pointer p-1 text-white/40 hover:text-red-600 w-fit">x</h1>
      </div>
      <div className="flex justify-between lg:p-4 p-2 items-end">
        <h1 className="text-3xl font-bold" >{title}</h1>
        <button className="font-family-[IBM_Mono_Plex] border-b w-fit text-white/70
                  hover:text-white cursor-pointer">#{code}
        </button>
      </div>
    </main>
  );
};

export default BookmarkItem;

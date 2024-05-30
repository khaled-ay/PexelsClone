import React from 'react'

function Search({search,handlechange}) {
  return (
    <div className="p-10 flex justify-center items-center flex-col space-y-5 min-h-[80vh] hero_Image bg-black text-white">
    <p className="text-3xl font-semibold text-left w-full md:w-[50%]">
      The best free stock photos, royalty free images shared by creators.
    </p>
    <input
      type="text"
      placeholder="Search for free photos..."
      value={search}
      onChange={handlechange}
      className="w-full md:w-[50%] p-3 outline-none border border-gray-200 rounded-md text-black"
    />
  </div>
  )
}

export default Search
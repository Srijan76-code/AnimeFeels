import React from 'react'

const SearchBar = () => {

    
    return (
        <>

            <div className="flex w-full  justify-center" >

                <form action="">
                    <input className=' group-out-of-range: w-[750px] h-14 relative top-[-26px] border-2 border-black text-black placeholder:text-black placeholder:text-lg shadow-neutral-400 shadow-lg px-2 '  type="text" placeholder='Search...' />
                </form>
            </div>


        </>
    )
}

export default SearchBar

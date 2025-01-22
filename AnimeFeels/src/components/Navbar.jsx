import React from 'react'

import 'react-slideshow-image/dist/styles.css'

const Navbar = () => {
    return (
        <div className='bg-black h-16 max-w-full text-lg ' >
            <div className="flex w-[90%] h-full  justify-between items-center  m-auto">

                <div className="flex w-1/3 justify-between">

                    <div className="flex h-full justify-center items-center  "><img className='pt-4' src="../../images/animefeels2.png" alt="AnimeFeels" /></div>   {/* Website Title */}

                    <div className="flex items-center h-10 w-52 justify-between  font-semibold">
                        <div className="px-3 py-1 hover:bg-cyan-800   ">
                            <a  href="">Popular</a>
                        </div>
                        <div className="px-3 py-1 hover:bg-cyan-800">
                            <a href="">Latest</a>
                        </div>
                        <div className="px-3 py-1 hover:bg-cyan-800">
                            <a href="">News</a>
                        </div>
                    </div>
                </div>


                <div className="flex h-full items-center w-28 justify-between ">

                    <div className="flex w-12 h-12 justify-center items-center px-1 border-2 border-cyan-600  cursor-pointer rounded-xl  hover:scale-110 ">
                        <img className='w-7' src="../../images/book-mark.png" alt="Favourites" />
                    </div>
                    <div className="bg-white border-2 rounded-full cursor-pointer hover:scale-110 ">
                        <img className='w-7'  src="../../images/profile-user.png" alt="Profile" />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Navbar

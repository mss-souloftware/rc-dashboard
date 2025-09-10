import Image from 'next/image'
import React from 'react'
import { MapPin } from 'lucide-react'

export default function ProfileCard() {
    return (
        <div className="bg-white border border-[#DBE0EA] rounded-xl p-5 flex flex-col items-center">
            <div className="flex justify-between items-center w-full">
                <h3 className="text-lg font-bold text-[#1B254F]">My Profile</h3>
                <button className="text-[#6B6B6B] border border-[#F2F2F2] px-3.5 py-1.5 rounded-full text-sm font-bold">Edit Profile</button>
            </div>
            <div className="relative mb-3">
                <Image
                    src="/global/profile.jpg"
                    alt="Profile"
                    width={80}
                    height={80}
                    className="rounded-full"
                />
                <span className="w-3.5 h-3.5 bg-[#2C9143] inline-block absolute rounded-full right-[8px] bottom-[4px] border border-[#fff]"></span>
            </div>
            <h4 className="text-xl text-[#353D49]">Antoni Francki</h4>
            <p className="text-gray-500 text-md flex items-center"> <MapPin className="w-4 h-4 text-gray-600 mr-1" />Lonsdale Street, Braddon</p>
            <div className='bg-[#F7F8FA] p-5 w-full rounded-xl mt-5'>
                <ul>
                    <li className='mb-3'>
                        <span className='text-sm text-[#78808B]'>Email</span>
                        <p className='text-[#2B3440]'>antonifrancki@gmail.com</p>
                    </li>
                    <li className='mb-3'>
                        <span className='text-sm text-[#78808B]'>Date of birth</span>
                        <p className='text-[#2B3440]'>03 March, 1978</p>
                    </li>
                    <li className='mb-3'>
                        <span className='text-sm text-[#78808B]'>Address</span>
                        <p className='text-[#2B3440]'>503/16 Lonsdale Street, Braddon </p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

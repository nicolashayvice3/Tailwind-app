import React, { useState } from "react";
// import Logo from "../assets/logo/turnerlogo-desktop.png";
import ImageSections from "../components/imageSection";
import { Link } from "react-router-dom";
import Buttons from "../components/buttons/buttons";

import {
    GreenFillBtn1,
  } from "../components/buttons/variants";


export default function Login () {
    const [text, setText] = useState('e.g. ABC1234567890');
    const [text1, setText1] = useState('day');
    const [text2, setText2] = useState('month');
    const [text3, setText3] = useState('year');

    const handleChange = (e) => {
        if (text) {
        setText(e.target.value);
        } else if (text1) {
        setText1(e.target.value);
        } else if (text2) {
        setText2(e.target.value);
        } else if (text3) {
        setText3(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('SUBMIT')
    }
    
    return (
        <>
        <div className="bg-gray-100">
            <div className="header-styling header-spacing drop-shadow-xl">
                <Link to="/">
                {/* <ImageSections imageUrl={Logo} /> */}
                </Link>
            </div>
            <div className="relative">
                <h2 className="text-black mont-font text-left font-semibold text-4xl pl-24 mt-24">Welcome Back</h2>
                <div className="drop-shadow-xl mb-14 bg-white grid ml-40 max-w-4xl mt-12 flex py-8 px-12">
                <p className="font-medium text-slate-800 text-3xl border-rose-800 border-b-4 pb-6">Retrieve your quote</p>
                <div className="flex grid-reverse w-full justify-between">
                    <p className="mt-12 text-xl">Quote number</p>
                    <form className="mt-8">
                    <input type="text" className="border-2 p-3 border-blue-500" onChange={handleChange} name="NLP" placeholder={text} size="50" />
                    </form>
                </div>
                <div className="flex grid-reverse w-full justify-between">
                    <p className="mt-8 text-xl shrink-0">Date of birth</p>
                    <form className="mt-6">
                    <input type="text" className="border-2 shrink  p-3 rounded-xl border-blue-500" onChange={handleChange} name="day" placeholder={text1} size="5" />
                    <input type="text" className="border-2 shrink p-3 ml-4 rounded-xl border-blue-500" onChange={handleChange} name="month" placeholder={text2} size="25" />
                    <input type="text" className="border-2 shrink p-3 ml-4 rounded-xl border-blue-500" onChange={handleChange} name="year" placeholder={text3} size="5" />
                    </form>
                </div>
                <div className="flex container border-b-2 justify-end py-10 border-black border-dashed font-medium">
                    <form>
                    <Buttons
                    className="border rounded-full"
                    variant={GreenFillBtn1}
                    text="YOUR QUOTE"
                    onClick={handleSubmit}
                    />
                    </form>
                </div>
                <div className="text-lg object-cover flex justify-center pt-4">
                    <p>Please refer to our privacy policy for more information on how we comply with law.</p>
                </div>
                </div>
            <footer class="pt-24 w-full inset-x-0 bottom-0 pb-12 px-6 shadow md:flex md:items-center md:justify-between bg-sky-600">
                <span class="text-sm text-white sm:text-center">© Copyright 2022 Company Name.
                </span>
                <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
                    <li>
                        <p class="mr-4 text-sm text-white hover:underline md:mr-6">Privacy Policy</p>
                    </li>
                    <li>
                        <p class="mr-4 text-sm text-white hover:underline md:mr-6">Terms & Conditions</p>
                    </li>
                    <li>
                        <p class="mr-4 text-sm text-white hover:underline md:mr-6">Cookie Policy</p>
                    </li>
                    <li>
                        <p class="text-sm text-white hover:underline">Contact</p>
                    </li>
                </ul>
            </footer>
            </div>
        </div>
        </>
    )
}
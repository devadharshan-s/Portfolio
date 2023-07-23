import React from 'react'

const About = () => {
    return <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
                I am a Final year student pursuing Bachelor of Technology degree in Information Technology.
                I have a strong passion for software development and I am always eager to learn new technologies.
                I have strong problem-solving skills and I am able to work independently and as part of a team.
            </p>
            <br/>
            <p className="text-xl mt-20">
                I am proficient in a variety of programming languages, including Java , C++ and Kotlin.
                I am also familiar with a number of frameworks and libraries, such as NodeJS, ExpressJS, React, and Django.
                I am confident that I have the skills and experience necessary to be successful as a software developer.
            </p>
        </div>
    </div>;
};

export default About;

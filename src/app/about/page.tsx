// src/components/AboutMe.tsx
import Image from 'next/image'

const AboutMe = () => {
  return (
    <section className="container mx-auto px-4 py-16  text-black">
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
        {/* Profile Image */}
        <div className="w-48 h-48 lg:w-72 lg:h-72 relative mb-6 lg:mb-0">
          <Image
            src="/me...jpg" 
            alt="Your Name"
            layout="fill"
            objectFit="cover"
            className=" shadow-2xl border-4 border-yellow-500"
          />
        </div>

        {/* About Me Details */}
        <div className="text-center lg:text-left">
          <h2 className="text-4xl font-semibold text-yellow-500 mb-4">About Me</h2>
          <p className="text-lg text-black mb-4">
            Hello, I’m <span className="font-bold text-yellow-500">Tanzeel Naveed Khan</span>, a passionate web developer with a focus on front-end development. I have experience in designing professional and dynamic websites using modern web technologies like React, Next.js, Tailwind CSS, and more. I love building user-centric interfaces that provide seamless experiences.
          </p>
          <p className="text-lg text-black mb-4">
            My background in software engineering allows me to approach web development with a comprehensive understanding of both the technical and creative aspects of building digital solutions. I am constantly learning new skills and improving my expertise in web development to stay ahead in this ever-evolving field.
          </p>
          <p className="text-lg text-black">
            When I’m not coding, you can find me exploring new tech trends, creating personal projects, or enjoying my time with my loved ones. I believe in the power of collaboration and always look for opportunities to work with creative and driven teams.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutMe

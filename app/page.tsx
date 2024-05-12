import Products from "@/components/Products";
import Skills from "@/components/Skills";
import { data } from "@/projectData/data";
import { Github, GithubIcon, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=''>
      <section className='flex 3xl:h-[calc(80vh-80px)]'>
        <div className='flex-1 flex flex-col xl:flex-row items-center space-y-12 xl:space-y-0 xl:space-x-12 px-4 pt-8 xl:py-8 xl:px-6 2xl:px-10 3xl:px-20'>
          <div className='h-[400px] min-w-[400px] md:min-w-[550px] md:h-[550px] lg:min-w-[650px] lg:h-[650px] xl:h-[450px] xl:min-w-[450px] 3xl:min-w-[600px] 3xl:h-[600px] rounded-full border-[20px] drop-shadow-xl border-orange-400'>
            <Image
              width={80}
              height={80}
              src='/assest/Darshan.png'
              alt=''
              className='w-full h-full rounded-full object-cover object-top'
            />
          </div>
          <div className='mb-8 leading-tight bg-white shadow-md px-8 py-8 pb-12'>
            <p className='text-[60px] xl:text-[60px] 2xl:text-[90px] font-light text-gray-900'>
              Hey There
            </p>
            <p className='text-[60px] xl:text-[70px] 2xl:text-[120px] leading-tight font-medium'>
              I'm Darshan
            </p>
            <p className='text-xl xl:text-lg 3xl:text-xl text-gray-500 mt-4'>
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Ipsam qui cumque, ipsa sed
              voluptatem dolores voluptate deserunt
              assumenda perferendis dolorum accusantium? Vel
              dicta explicabo ab commodi pariatur recusandae
              minus tenetur.
            </p>

            <div className='flex items-center space-x-4 mt-2 lg:mt-4 3xl:mt-8'>
              <Link
                href='https://www.linkedin.com/in/dharshankumaras/'
                target='_'
              >
                <Linkedin className='bg-gray-800 text-white rounded-md h-7 w-7 p-1 cursor-pointer' />
              </Link>

              <Link
                href='https://github.com/Darshan-Darshu'
                target='_'
              >
                <Github className='bg-gray-800 text-white rounded-full h-7 w-7 p-1 cursor-pointer' />
              </Link>
            </div>

            <div className='flex flex-col mt-2 lg:mt-4 3xl:mt-6 space-y-2'>
              <p className='text-xl text-gray-700 xl:mt-1 3xl:mt-4'>
                Tech Stack
              </p>

              <div className='grid grid-cols-5 lg:grid-cols-8 xl:grid-cols-5 2xl:grid-cols-6 3xl:grid-cols-8 gap-2 2xl:gap-y-5 items-center'>
                <Image
                  src='/assest/html.png'
                  alt='html-logo'
                  width={60}
                  height={60}
                  className='w-12 h-12'
                />
                <Image
                  src='/assest/css.png'
                  alt='css-logo'
                  width={60}
                  height={60}
                  className='w-16 h-16 2xl:-ml-2'
                />
                <Image
                  src='/assest/JavaScript-logo.png'
                  alt='html-logo'
                  width={60}
                  height={60}
                  className='w-12 h-12 xl:ml-2'
                />
                <Image
                  src='/assest/React-icon.png'
                  alt='html-logo'
                  width={60}
                  height={60}
                  className='w-12 h-12 xl:ml-2'
                />
                <Image
                  src='/assest/nodejs.png'
                  alt='html-logo'
                  width={60}
                  height={60}
                  className='w-20 h-12 xl:ml-2 2xl:-ml-2'
                />
                <Image
                  src='/assest/nextjs.png'
                  alt='html-logo'
                  width={60}
                  height={60}
                  className='w-20 h-12 2xl:ml-4'
                />
                <Image
                  src='/assest/tailwind.png'
                  alt='html-logo'
                  width={60}
                  height={60}
                  className='w-24 h-20 xl:16 2xl:-ml-2'
                />
                <Image
                  src='/assest/mongo.png'
                  alt='html-logo'
                  width={60}
                  height={60}
                  className='w-20 h-16 2xl:-ml-2 '
                />
              </div>
            </div>
          </div>
        </div>
        <div className='hidden xl:block bg-white w-[25%] max-h-full overflow-hidden'>
          <div className='w-full h-full'>
            {data
              .slice(0, 3)
              .map(({ id, image, name, url }) => (
                <Link
                  href={url}
                  key={id}
                  target='_'
                  className='relative inline-block h-1/3 w-full border-2 border-orange-100'
                >
                  <Image
                    width={80}
                    height={80}
                    src={image}
                    className='h-full object-cover w-full'
                    alt='project'
                  />
                  <p className='flex items-center px-4 uppercase text-white font-semibold absolute bottom-0 project-bg h-16 w-full'>
                    {name}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <section className='bg-white h-[300px] my-8 p-4 md:p-0 xl:my-0'>
        <div className='flex flex-col space-y-4 text-blue-800 justify-center h-full max-w-[80vw] md:max-w-[60vw] mx-auto'>
          <p className='text-2xl'>
            "Once there is a distance between you and your
            thought process, a new freedom is born. With
            this freedom, a new preception arises"
          </p>
          <p className='text-2xl'>
            "Prayer is when you talk to god, mediation is
            when god talks to you"
          </p>
        </div>
      </section>

      <section>
        <Products />
      </section>

      <section className='award-bg h-[400px] mt-10 md:mt-20 ld:mt-40 pt-10'>
        <h1 className='text-4xl text-white text-center'>
          Awards
        </h1>

        <div className='flex flex-col w-full items-center text-xl space-y-2 mt-10 text-white'>
          <p>MERN Batch Topper in Zensar Technology</p>
          <p>
            Hackathon runner's in Zensar Technology -
            CLADETHON
          </p>
          <p>Hackathon winner in UVCE college - CODEFURY</p>
          <p>
            Build a seating booking for Zensar JP nagar
            office
          </p>
          <p>
            Build a seating booking for Zensar chennai
            office
          </p>
        </div>
      </section>
    </main>
  );
}

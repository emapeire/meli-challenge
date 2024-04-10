import Image from 'next/image'

export default function Home() {
  return (
    <div className='py-12'>
      <section className='border border-neutral-300 bg-neutral-100 rounded py-12 px-4 gap-6 flex flex-col items-center justify-center font-bold'>
        <h2 className='md:text-6xl text-4xl'>MeLi 🤝</h2>
        <h3 className=' md:text-5xl text-3xl'>Frontend Challenge</h3>
      </section>
      <section className='border border-neutral-300 bg-neutral-100 rounded mt-12 flex flex-col items-center justify-center gap-6 py-24 px-4'>
        <h4 className='md:text-4xl text-2xl font-bold'>What is this?</h4>
        <p className='md:text-xl text-lg text-center'>
          This is a simple frontend challenge for MeLi. You can find the
          instructions in the README file.
        </p>
      </section>
    </div>
  )
}

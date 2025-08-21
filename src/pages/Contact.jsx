function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact</h2>

      <div className="mt-6 grid md:grid-cols-2 gap-10">
        <div className="space-y-3 text-gray-700">
          <p><span className="font-medium text-gray-900">Email:</span> <a className="underline" href="mailto:karthikachari780@gmail.com">karthikachari780@gmail.com</a></p>
          <p><span className="font-medium text-gray-900">Phone:</span> <a className="underline" href="tel:+916304865771">+91 6304865771</a></p>
          <p>
            <span className="font-medium text-gray-900">GitHub:</span> <a className="underline" href="https://github.com/Karthik9512" target="_blank" rel="noreferrer">github.com/Karthik9512</a>
          </p>
          <p>
            <span className="font-medium text-gray-900">LinkedIn:</span> <a className="underline" href="http://www.linkedin.com/in/theruvayee-karthik-achari-8a7b92344" target="_blank" rel="noreferrer">linkedin.com/in/theruvayee-karthik-achari-8a7b92344</a>
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-900">Name</label>
            <input type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">Email</label>
            <input type="email" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-900">Message</label>
            <textarea rows="4" className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-300" placeholder="How can I help?" />
          </div>
          <button type="submit" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-black/90 transition">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact



import Link from 'next/link'

export default function BalancingTechnologyAndLife() {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">The Art of Balancing Technology and Life</h1>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        In today s fast-paced world, technology is both a blessing and a challenge. While it enables us to connect, create, and innovate like never before, it also has the potential to consume our time, attention, and energy if not managed properly.
      </p>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Striking a balance between technology and life is essential for our mental, physical, and emotional well-being. By adopting mindful habits and setting boundaries, we can enjoy the benefits of technology without becoming overwhelmed by it.
      </p>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Start by scheduling tech-free time in your day, whether its during meals, before bed, or when spending quality time with loved ones. Turn off notifications to reduce distractions, and curate your digital environment by limiting unnecessary apps and content.
      </p>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Additionally, embrace the power of human connection. Prioritize face-to-face interactions and activities that foster real-life relationships. Remember, life happens in the present moment, not behind a screen.
      </p>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
        Technology is here to stay, but by mastering the art of balance, we can ensure it enriches our lives rather than detracts from them.
      </p>
      <div className="mt-8 text-center">
          <Link href="/" className="bg-gradient-to-r from-teal-500 via-blue-400 to-purple-600 text-white py-3 px-6 rounded-lg hover:bg-gradient-to-l hover:from-purple-600 hover:to-teal-500 transition duration-300 ease-in-out">
            Back to Home
          </Link>
        </div>
        </div> 
  )
}

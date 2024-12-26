// src/app/page.tsx
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'

interface Post {
  title: string
  slug: { current: string }
  author: string
  publishedAt: string
  mainImage: { asset: { url: string }; alt: string }
  categories: string[]
}

const query = groq`*[_type == "post"] | order(publishedAt desc) {
  title,
  slug,
  "author": author->name,
  "categories": categories[]->title,
  publishedAt,
  mainImage {
    asset->{
      _id,
      url
    },
    alt
  }
}`

export default async function Home() {
  const posts: Post[] = await client.fetch(query)

  return (
    <div className=" mx-auto px-4 pl-6 ">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-6 pl-6 pr-6 bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 text-white shadow-lg rounded-lg mb-8">
        <div className="text-3xl font-semibold font-serif">Blogs by Tanzeel</div>
        <ul className="hidden sm:flex space-x-8">
          <li>
            <Link href="/" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">Home</Link>
          </li>
          <li>
            <Link href="/about" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">About</Link>
          </li>
          <li>
            <Link href="/contact" className="text-lg hover:text-yellow-400 transition duration-300 ease-in-out">Contact</Link>
          </li>
        </ul>
        {/* Mobile Navbar */}
        <div className="sm:hidden">
          <Link href="/menu" className="text-xl">☰</Link>
        </div>
      </nav>

      {/* Main Blog Section */}
      <main className="mt-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.slug.current} className="bg-white p-6 rounded-lg shadow-xl transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r from-green-400 to-blue-500">
              <Link href={`/post/${post.slug.current}`} className="block hover:text-gray-900 transition duration-300 ease-in-out">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 hover:text-yellow-400">{post.title}</h3>
                {post.mainImage && (
                  <Image
                    src={post.mainImage.asset.url}
                    alt={post.mainImage.alt}
                    width={600}
                    height={350}
                    objectFit="cover"
                    className="mb-4 rounded-lg transition duration-300 ease-in-out hover:opacity-80"
                  />
                )}
                <div className="text-sm text-gray-600">
                  <p>
                    {post.author && `By ${post.author}`} |{' '}
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>
                  <p className="mt-2">Categories: {post.categories.join(', ')}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* Contact Section */}
      <footer className="w-full bg-gradient-to-r from-teal-500 via-blue-400 to-purple-600 text-white py-8 mt-16 shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
        <p className="text-center mb-4 text-lg">If you have any questions or want to get in touch, feel free to reach out!</p>
        <div className="text-center">
          <p>Email: <a href="mailto:tanzeelnaveed8@gmail.com" className="text-yellow-400 hover:underline transition duration-300 ease-in-out">tanzeelnaveed8@gmail.com</a></p>
          <p className="mt-2">Phone: <span className="text-yellow-400">+123 456 7890</span></p>
        </div>
      </footer>
    </div>
  )
}

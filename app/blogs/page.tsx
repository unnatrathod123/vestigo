import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Understanding Insurance Investigations: Best Practices",
    slug: "insurance-investigations-best-practices",
    excerpt:
      "Explore the key techniques used in modern insurance investigations to ensure accuracy and prevent fraud.",
    image: "/images/blog/insurance-investigate.jpg",
  },
  {
    id: 2,
    title: "The Role of Data Analytics in Risk Assessment",
    slug: "data-analytics-risk-assessment",
    excerpt:
      "Learn how advanced analytics transform risk evaluation and streamline decision-making in insurance.",
    image: "/images/blog/data-analytics-risk.jpg",
  },
  {
    id: 3,
    title: "Compliance in Insurance: What You Need to Know",
    slug: "compliance-in-insurance-guide",
    excerpt:
      "Learn key compliance standards for insurers and how to stay ahead of regulatory requirements.",
    image: "/images/blog/compliance-insurance.jpg",
  },
];

const categories = ["Insurance", "Compliance", "Technology", "Risk Analysis", "Industry Insights"];
const recentPosts = blogPosts.slice(0, 3); // Latest 3 posts

export default function BlogPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Blog Listing */}
        <div className="lg:col-span-2 space-y-8">
          <h1 className="text-4xl font-bold text-gray-900 text-center lg:text-left">
            Vestigo Insights & Articles
          </h1>
          <p className="mt-2 text-gray-600 text-center lg:text-left">
            Industry updates, best practices, and insights on insurance investigations,
            risk analysis, compliance, and technology solutions.
          </p>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
                  <div
                    className="h-48 rounded-t-xl bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-gray-900">{post.title}</h2>
                    <p className="mt-4 text-gray-700 line-clamp-3">{post.excerpt}</p>
                    <p className="mt-4 text-teal-600 font-medium">Read More →</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-8">
          {/* Search */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Search Articles</h3>
            <input
              type="text"
              placeholder="Search..."
              className="mt-4 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>

          {/* Categories */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Categories</h3>
            <ul className="mt-4 space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-teal-600 transition font-medium"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Recent Posts</h3>
            <ul className="mt-4 space-y-4">
              {recentPosts.map((post) => (
                <li key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="flex items-center space-x-4 cursor-pointer">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                      <p className="text-gray-700 font-medium">{post.title}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900">Newsletter</h3>
            <p className="mt-2 text-gray-600 text-sm">
              Subscribe to get the latest updates on industry insights and risk management.
            </p>
            <form className="mt-4 flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="bg-teal-600 text-white py-2 rounded-md font-medium hover:bg-teal-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </main>
  );
}

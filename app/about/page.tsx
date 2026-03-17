import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="flex-1 py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-8">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600">IndieGameConnect</span>
        </h1>
        
        <div className="prose prose-lg mx-auto text-gray-600 space-y-8">
          <p className="text-2xl font-medium leading-relaxed italic text-gray-800 border-l-4 border-primary-500 pl-6 my-12">
            "We are a group of indie game dev enthusiasts, we've seen what newsletter communities have done for book publishing, and we want to do the same for gamers!"
          </p>
          
          <p>
            Building an audience as an indie developer is one of the hardest parts of creating a game. You pour your heart and soul into design, programming, art, and music, but finding the players who will love your work can feel like shouting into the void.
          </p>
          
          <p>
            We noticed that self-published authors had solved this problem beautifully. Through platforms that allowed them to easily distribute digital copies to early readers, build dedicated mailing lists, and collaborate with other authors in their genre, they created massive, engaged communities.
          </p>
          
          <p>
            IndieGameConnect brings those exact strategies to the games industry.
          </p>

          <div className="bg-gray-50 rounded-2xl p-8 my-12 not-prose border border-gray-100 shadow-sm text-left">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To empower every independent game developer to build a sustainable, engaged audience they own, reducing reliance on algorithmic discovery and platform monopolies.
            </p>
          </div>

          <p>
            Whether you are preparing for your first Kickstarter, trying to get wishlists for your Steam page, or looking for dedicated beta testers, we provide the tools you need to connect directly with your players.
          </p>
        </div>

        <div className="mt-16">
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-full text-lg font-bold transition-transform hover:scale-105"
          >
            Join Our Community
          </Link>
        </div>
      </div>
    </div>
  );
}

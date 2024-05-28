const posts = [
    {
      id: 1,
      title: 'coming soon...!',
      href: '#',
      description:
        'some body text',
      date: 'May 20, 2024',
      datetime: '2024-05-20',
      category: { title: 'category', href: '#' },
    },
  ]
  
  export default function Posts() {
    return (
        <div className="pb-100">
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl text-center">
                my blog! wahoo!
                <small class="ms-2 font-semibold text-neutral">(#1 opinion haver)</small>
            </h1>
            <p className="mb-6 text-lg font-normal text-primary lg:text-xl px-5 sm:mx-5 xl:px-48 text-center">
            movie/food/game reviews, my computer science woes and experiences, and general topics that i find fun :3
            </p>
      <div className="pt-12 pb-32 sm:pt-12 sm-pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
                <div className="rounded bg-white mx-30 px-10 my-30 py-10">
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-base-100">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-neutral px-3 py-1.5 font-medium text-white hover:bg-primary"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-base-100">{post.description}</p>
                </div>
              </article>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    )
}
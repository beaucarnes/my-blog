async function getPosts() {
  // Mock data
  return [
    { id: 1, title: 'Stacked Diffs are Fast', content: 'Review small PRs.' },
    { id: 2, title: 'Graphite Automates Git', content: 'No more conflicts.' },
  ];
}

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="p-10 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
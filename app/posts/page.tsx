import CardList from "../components/CardList";
import ViewUserButton from "../components/ViewUserButton";

const base_url = "https://jsonplaceholder.typicode.com/posts";

interface Iposts {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = async() => {

    const response = await fetch(base_url, {
        cache: "no-store"
    });
    const posts: Iposts[] = await response.json();

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <p className="text-sm text-gray-500">{new Date().toLocaleTimeString()}</p>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Posts Page</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {posts.map((post) => {
                    return (
                        <CardList key={post.id}>
                            <div className="p-4 bg-white shadow-md rounded-lg">
                                <p className="text-gray-400 text-xs">Post ID: {post.id}</p>
                                <h2 className="text-lg font-semibold text-gray-700">{post.title}</h2>
                                <p className="text-gray-600 mt-2">{post.body}</p>
                                <ViewUserButton userId={post.userId} />
                            </div>
                        </CardList>
                    )
                })}
            </div>
        </div>
    )
}

export default Posts;

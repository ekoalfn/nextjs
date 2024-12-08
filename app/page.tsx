import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Link
        href={'/posts'}
        className="px-4 py-2 text-white bg-blue-600 rounded-md shadow-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
      >
        Posts Page
      </Link>
    </div>
  );
}
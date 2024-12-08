"use client";

interface ViewUserButtonProps {
    userId: number
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
    const handleClick = () => alert(`User ID: ${userId}`);

    return (
        <button 
            onClick={handleClick} 
            className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
            Lihat User
        </button>
    );
}

export default ViewUserButton;
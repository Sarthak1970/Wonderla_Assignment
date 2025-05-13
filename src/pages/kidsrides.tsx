import Link from 'next/link';

const KidsRides = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <header className="mb-8">
        <Link href="/" className="text-blue-400 hover:underline">
          &larr; Back to Home
        </Link>
      </header>
      <h1 className="text-4xl font-bold mb-4">Kids Attractions</h1>
      <p>This page showcases all Kids rides and attractions.</p>
    </div>
  );
};

export default KidsRides;

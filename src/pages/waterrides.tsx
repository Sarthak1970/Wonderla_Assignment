import Link from 'next/link';

const WaterRides = () => {
  return (
    <div className="min-h-screen bg-gray-800 text-white p-8">
      <header className="mb-8">
        <Link href="/" className="text-blue-400 hover:underline">
          &larr; Back to Home
        </Link>
      </header>
      <h1 className="text-4xl font-bold mb-4">Water Attractions</h1>
      <p>This page showcases all Water rides and attractions.</p>
    </div>
  );
};

export default WaterRides;

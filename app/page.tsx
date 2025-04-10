import Image from 'next/image';

    export default function Home() {
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <Image 
            src="https://storage.googleapis.com/magnolia-storage-dev-test-123/projects/4e9dc240-fccc-415a-adf7-c3a5694fbf2f/cm92utiac0000a8z95mz5asqt/images/cnt3ldnhwq.png" 
            alt="Stylized Abstract Illustration" 
            width={512} 
            height={512} 
          />
        </div>
      );
    }
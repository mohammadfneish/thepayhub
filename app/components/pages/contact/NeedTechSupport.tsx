'use client'

export default function NeedTechSupport() {
  return (
    <div className="flex flex-col w-full items-center py-20 mb-20">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-4xl font-bold text-secondary-500 mt-5 p-5 text-center">Need Technical Support?</h3>
        <p className="text-xl my-4 px-5 text-white text-center max-w-[650px]">
          Our dedicated support team is available to help you with any technical questions or issues you may encounter.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 w-full">
        <button
          className="text-black bg-secondary-500 px-4 py-2 text-sm font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          onClick={() => console.log('Visit Developer Hub')}>
          Visit Developer Hub
        </button>
        <button
          className="text-white bg-transparent border border-white px-4 py-2 text-sm font-semibold rounded-full transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
          onClick={() => console.log('Visit Developer Hub')}>
          Visit Developer Hub
        </button>
      </div>
    </div>
  )
}

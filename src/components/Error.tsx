function ErrorMessage({ message }: { message?: string }) {
   return (
      <div className="w-full h-full absolute inset-1 flex items-center justify-center max-w-6xl mx-auto">
         <h1 className="text-red-500 font-bold">An Error Occurred {message} </h1>
         <button className="mx-5 hover:text-blue-600">Try Again?</button>
      </div>
   );
}

export default ErrorMessage;

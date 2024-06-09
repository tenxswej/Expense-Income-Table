import Spinner from "./Spinner";
function Skeleton() {
   return (
      <div className="w-full h-full absolute inset-1 flex items-center justify-center">
         <Spinner />
      </div>
   );
}

export default Skeleton;

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-32">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-t-4 border-b-4 border-primary-600 animate-spin"></div>
        <div className="absolute top-0 left-0 h-16 w-16 rounded-full border-t-4 border-b-4 border-primary-300 animate-pulse"></div>
      </div>
    </div>
  )
}

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex items-center gap-2">
        <span className="block w-2 h-2 rounded-full bg-vl-blue animate-pulse" />
        <span className="block w-2 h-2 rounded-full bg-vl-blue animate-pulse [animation-delay:150ms]" />
        <span className="block w-2 h-2 rounded-full bg-vl-blue animate-pulse [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export function ScrollCue() {
  return (
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-ink dark:text-ink-dark opacity-80 ">
      <span className="font-handwritten text-2xl">scroll</span>
      <span className="animate-bounce text-4xl">↓</span>
    </div>
  );
}
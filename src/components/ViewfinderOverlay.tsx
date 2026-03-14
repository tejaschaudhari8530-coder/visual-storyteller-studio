const ViewfinderOverlay = () => (
  <div className="viewfinder-overlay">
    <div className="absolute top-6 right-6 w-10 h-10 border-t border-r border-foreground/30" />
    <div className="absolute bottom-6 left-6 w-10 h-10 border-b border-l border-foreground/30" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="w-6 h-px bg-foreground/30" />
      <div className="w-px h-6 bg-foreground/30 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>
);

export default ViewfinderOverlay;

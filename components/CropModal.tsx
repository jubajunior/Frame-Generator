
import React, { useState, useRef, useEffect } from 'react';
import { Move } from 'lucide-react';

interface CropModalProps {
  imageSrc: string;
  onConfirm: (croppedImage: string) => void;
  onCancel: () => void;
}

const CropModal: React.FC<CropModalProps> = ({ imageSrc, onConfirm, onCancel }) => {
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  // Preload image
  useEffect(() => {
    const img = new Image();
    img.src = imageSrc;
    img.onload = () => {
      imageRef.current = img;
      renderCanvas();
    };
  }, [imageSrc]);

  const renderCanvas = () => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 600;
    canvas.width = size;
    canvas.height = size;

    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(0, 0, size, size);

    // Calculate scaling to fill the square
    const scale = Math.max(size / img.width, size / img.height) * zoom;
    const w = img.width * scale;
    const h = img.height * scale;

    // Center by default + user offset
    const x = (size - w) / 2 + offset.x;
    const y = (size - h) / 2 + offset.y;

    ctx.drawImage(img, x, y, w, h);
  };

  useEffect(() => {
    renderCanvas();
  }, [zoom, offset]);

  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - offset.x, y: clientY - offset.y });
  };

  const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    
    setOffset({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleConfirm = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    onConfirm(canvas.toDataURL('image/png'));
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center bg-slate-900/60 backdrop-blur-md p-6 animate-in fade-in duration-300">
      <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-md p-8 overflow-hidden transform animate-in zoom-in slide-in-from-bottom-8 duration-500">
        <h3 className="text-2xl font-black text-slate-800 mb-6 text-center">ছবিটি এডজাস্ট করুন</h3>
        
        <div 
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseMove}
          onTouchEnd={handleMouseUp}
          className={`relative aspect-square w-full rounded-3xl overflow-hidden bg-slate-100 shadow-inner group cursor-move select-none ${isDragging ? 'active:cursor-grabbing' : 'hover:cursor-grab'}`}
        >
          <canvas ref={canvasRef} className="w-full h-full object-cover pointer-events-none" />
          
          {/* Overlay Guide Lines */}
          <div className="absolute inset-0 grid grid-cols-3 pointer-events-none opacity-20">
            <div className="border-r border-white"></div>
            <div className="border-r border-white"></div>
            <div></div>
          </div>
          <div className="absolute inset-0 grid grid-rows-3 pointer-events-none opacity-20">
            <div className="border-b border-white"></div>
            <div className="border-b border-white"></div>
            <div></div>
          </div>

          {/* Interaction Hint */}
          {!isDragging && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="bg-black/20 backdrop-blur-sm p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Move className="w-6 h-6 text-white" />
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 space-y-6">
          <div className="space-y-3">
            <div className="flex justify-between text-xs font-black text-slate-400 uppercase tracking-[0.2em]">
              <span>ZOOM</span>
              <span className="text-green-600">{Math.round(zoom * 100)}%</span>
            </div>
            <div className="relative flex items-center h-6">
              <input
                type="range" 
                min="1" 
                max="4" 
                step="0.01" 
                value={zoom}
                onChange={(e) => setZoom(parseFloat(e.target.value))}
                className="w-full h-2 bg-slate-100 rounded-full appearance-none cursor-pointer accent-green-600 focus:outline-none"
              />
            </div>
            <p className="text-[10px] text-center text-slate-400 font-bold">ছবিটি মাউস বা হাত দিয়ে সরিয়ে পজিশন ঠিক করুন</p>
          </div>

          <div className="flex gap-4">
            <button 
              onClick={onCancel} 
              className="flex-1 py-4 px-6 bg-slate-50 text-slate-500 font-black rounded-2xl hover:bg-slate-100 transition-all border border-slate-100"
            >
              বাতিল
            </button>
            <button 
              onClick={handleConfirm} 
              className="flex-1 py-4 px-6 bg-[#004d26] text-white font-black rounded-2xl hover:bg-[#003d1e] transition-all shadow-xl hover:shadow-green-100 active:scale-95"
            >
              নিশ্চিত করুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CropModal;

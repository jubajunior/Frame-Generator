
import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Download, Loader2, AlertCircle, RefreshCw, Move, ZoomIn, ZoomOut } from 'lucide-react';
import { BENGALI_TEXT, FRAME_OVERLAY_URL } from '../constants';

interface ProfileFrameGeneratorProps {
  userImage: string | null;
}

const ProfileFrameGenerator: React.FC<ProfileFrameGeneratorProps> = ({ userImage }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorState, setErrorState] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  // Pan & Zoom State
  const [zoom, setZoom] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      if (src.startsWith('http')) {
        img.crossOrigin = "anonymous";
      }
      img.onload = () => resolve(img);
      img.onerror = () => reject(new Error(`Failed to load: ${src.substring(0, 30)}`));
      const cacheBuster = retryCount > 0 ? `?v=${retryCount}` : '';
      img.src = src.startsWith('data:') ? src : src + cacheBuster;
    });
  };

  const drawCanvas = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = 3840; // 4K Resolution
    canvas.width = size;
    canvas.height = size;
    
    ctx.clearRect(0, 0, size, size);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, size, size);

    if (userImage) {
      setIsProcessing(true);
      setErrorState(null);
      try {
        const [uImg, fImg] = await Promise.all([
          loadImage(userImage),
          loadImage(FRAME_OVERLAY_URL)
        ]);

        // 1. Draw User Image with Pan & Zoom
        const baseScale = Math.max(size / uImg.width, size / uImg.height);
        const currentScale = baseScale * zoom;
        const w = uImg.width * currentScale;
        const h = uImg.height * currentScale;

        // Apply offsets (scaled to 4K internal resolution)
        const containerWidth = containerRef.current?.offsetWidth || 1;
        const scaleToCanvas = size / containerWidth;
        
        const drawX = (size - w) / 2 + (offset.x * scaleToCanvas);
        const drawY = (size - h) / 2 + (offset.y * scaleToCanvas);

        ctx.drawImage(uImg, drawX, drawY, w, h);

        // 2. Draw Frame Overlay
        ctx.drawImage(fImg, 0, 0, size, size);

      } catch (err: any) {
        setErrorState(err.message);
      } finally {
        setIsProcessing(false);
      }
    } else {
      ctx.fillStyle = '#f1f5f9';
      ctx.fillRect(0, 0, size, size);
      ctx.fillStyle = '#64748b';
      ctx.textAlign = 'center';
      ctx.font = 'bold 150px "Noto Sans Bengali", Arial';
      ctx.fillText('আপনার ছবি আপলোড করুন', size / 2, size / 2);
    }
  }, [userImage, zoom, offset, retryCount]);

  useEffect(() => {
    drawCanvas();
  }, [drawCanvas]);

  // Interaction Handlers
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (!userImage) return;
    setIsDragging(true);
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setDragStart({ x: clientX - offset.x, y: clientY - offset.y });
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging || !userImage) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
    setOffset({
      x: clientX - dragStart.x,
      y: clientY - dragStart.y
    });
  };

  const handleEnd = () => setIsDragging(false);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas || !userImage || isProcessing || errorState) return;
    const dataUrl = canvas.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.download = `majlis-profile-4k-${Date.now()}.png`;
    link.href = dataUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      {/* Interactive Frame Canvas */}
      <div 
        ref={containerRef}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        className="relative w-full max-w-[500px] aspect-square group cursor-move select-none"
      >
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#004d26] to-emerald-400 rounded-[3rem] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-700"></div>
        <div className="relative w-full h-full bg-white shadow-2xl rounded-[2.5rem] overflow-hidden border-8 border-white group-hover:border-green-50 transition-all duration-500">
          <canvas 
            ref={canvasRef} 
            className={`w-full h-full object-contain transition-opacity duration-500 ${isProcessing ? 'opacity-40' : 'opacity-100'}`} 
          />
          
          {userImage && !isProcessing && (
            <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Move className="w-5 h-5 text-white" />
            </div>
          )}

          {isProcessing && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/40 backdrop-blur-md">
              <Loader2 className="w-10 h-10 text-[#004d26] animate-spin mb-4" />
              <p className="font-black text-[#004d26] text-xs uppercase tracking-widest">Updating Frame...</p>
            </div>
          )}

          {errorState && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50/95 p-6 text-center">
              <AlertCircle className="w-10 h-10 text-red-500 mb-4" />
              <button onClick={() => setRetryCount(c => c + 1)} className="bg-red-600 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg">
                <RefreshCw className="w-4 h-4 mr-2 inline" /> পুনরায় চেষ্টা করুন
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Adjust Controls */}
      {userImage && (
        <div className="w-full max-w-sm space-y-4 px-4">
          <div className="flex items-center gap-4 bg-white/60 backdrop-blur-sm p-4 rounded-3xl border border-white shadow-sm">
            <ZoomOut className="w-5 h-5 text-slate-400" />
            <input 
              type="range" 
              min="0.5" 
              max="3" 
              step="0.01" 
              value={zoom} 
              onChange={(e) => setZoom(parseFloat(e.target.value))}
              className="flex-1 h-2 bg-green-100 rounded-full appearance-none cursor-pointer accent-[#004d26]"
            />
            <ZoomIn className="w-5 h-5 text-slate-400" />
          </div>
          <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">ছবিটি ড্রাগ করে পজিশন এডজাস্ট করুন</p>
        </div>
      )}

      <button 
        disabled={!userImage || isProcessing || !!errorState}
        onClick={handleDownload}
        className="w-full group flex items-center justify-center gap-4 bg-[#004d26] text-white py-6 rounded-3xl font-black text-xl hover:bg-[#003d1e] transition-all shadow-xl hover:shadow-green-200 active:scale-95 disabled:opacity-40"
      >
        <Download className="w-6 h-6 group-hover:bounce" />
        {BENGALI_TEXT.downloadBtn} (4K)
      </button>
    </div>
  );
};

export default ProfileFrameGenerator;

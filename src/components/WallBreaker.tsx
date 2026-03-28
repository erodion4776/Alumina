import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ShieldCheck } from 'lucide-react';
import { WhatsAppGateway } from './WhatsAppGateway';

interface WallBreakerProps {
  onBack: () => void;
}

export const WallBreaker: React.FC<WallBreakerProps> = ({ onBack }) => {
  const [hasAnnounced, setHasAnnounced] = useState(false);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number | null>(null);

  // Game state
  const ball = useRef({ x: 200, y: 300, dx: 2, dy: -2, radius: 8 });
  const paddle = useRef({ x: 150, y: 380, width: 100, height: 10 });
  const bricks = useRef<{ x: number, y: number, status: number }[]>([]);

  useEffect(() => {
    if (!hasAnnounced || isGameOver) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize bricks
    const rowCount = 3;
    const colCount = 5;
    const brickWidth = 70;
    const brickHeight = 20;
    const brickPadding = 10;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 30;

    bricks.current = [];
    for (let c = 0; c < colCount; c++) {
      for (let r = 0; r < rowCount; r++) {
        bricks.current.push({
          x: c * (brickWidth + brickPadding) + brickOffsetLeft,
          y: r * (brickHeight + brickPadding) + brickOffsetTop,
          status: 1
        });
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw ball
      ctx.beginPath();
      ctx.arc(ball.current.x, ball.current.y, ball.current.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#DB2777";
      ctx.fill();
      ctx.closePath();

      // Draw paddle
      ctx.beginPath();
      ctx.rect(paddle.current.x, paddle.current.y, paddle.current.width, paddle.current.height);
      ctx.fillStyle = "#581C87";
      ctx.fill();
      ctx.closePath();

      // Draw bricks
      bricks.current.forEach(b => {
        if (b.status === 1) {
          ctx.beginPath();
          ctx.rect(b.x, b.y, brickWidth, brickHeight);
          ctx.fillStyle = "#EAB308";
          ctx.fill();
          ctx.closePath();
        }
      });

      // Collision detection
      bricks.current.forEach(b => {
        if (b.status === 1) {
          if (
            ball.current.x > b.x &&
            ball.current.x < b.x + brickWidth &&
            ball.current.y > b.y &&
            ball.current.y < b.y + brickHeight
          ) {
            ball.current.dy = -ball.current.dy;
            b.status = 0;
            setScore(s => s + 10);
            if (bricks.current.every(br => br.status === 0)) {
              setIsGameOver(true);
            }
          }
        }
      });

      // Wall collision
      if (ball.current.x + ball.current.dx > canvas.width - ball.current.radius || ball.current.x + ball.current.dx < ball.current.radius) {
        ball.current.dx = -ball.current.dx;
      }
      if (ball.current.y + ball.current.dy < ball.current.radius) {
        ball.current.dy = -ball.current.dy;
      } else if (ball.current.y + ball.current.dy > canvas.height - ball.current.radius) {
        if (ball.current.x > paddle.current.x && ball.current.x < paddle.current.x + paddle.current.width) {
          ball.current.dy = -ball.current.dy;
        } else {
          setIsGameOver(true);
        }
      }

      ball.current.x += ball.current.dx;
      ball.current.y += ball.current.dy;

      requestRef.current = requestAnimationFrame(draw);
    };

    requestRef.current = requestAnimationFrame(draw);

    const handleTouch = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      const touchX = e.touches[0].clientX - rect.left;
      paddle.current.x = Math.max(0, Math.min(canvas.width - paddle.current.width, touchX - paddle.current.width / 2));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      paddle.current.x = Math.max(0, Math.min(canvas.width - paddle.current.width, mouseX - paddle.current.width / 2));
    };

    canvas.addEventListener('touchmove', handleTouch);
    canvas.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      canvas.removeEventListener('touchmove', handleTouch);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasAnnounced, isGameOver]);

  if (!hasAnnounced) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-4xl font-serif font-black text-purple mb-8 uppercase tracking-tighter">Wall Breaker</h2>
        <WhatsAppGateway 
          gameName="Wall Breaker" 
          type="pre" 
          onComplete={() => setHasAnnounced(true)} 
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center min-h-[70vh]">
      <div className="w-full flex justify-between items-center mb-8">
        <button onClick={onBack} className="flex items-center gap-2 text-purple font-bold"><ChevronLeft /> Back</button>
        <div className="text-pink font-bold">Score: {score}</div>
      </div>

      <div className="bg-white rounded-[2.5rem] p-4 shadow-2xl border-4 border-gold w-full max-w-md aspect-[1/1] overflow-hidden relative">
        <canvas ref={canvasRef} width={400} height={400} className="w-full h-full bg-slate-50" />
      </div>

      {isGameOver && !hasSubmitted && (
        <WhatsAppGateway 
          gameName="Wall Breaker" 
          score={`${score} Hurdles Cleared`} 
          type="post" 
          onComplete={() => setHasSubmitted(true)} 
        />
      )}

      {isGameOver && hasSubmitted && (
        <div className="mt-8">
          <button onClick={() => window.location.reload()} className="bg-purple text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs">Play Again</button>
        </div>
      )}
    </div>
  );
};

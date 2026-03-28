import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Share2, RotateCcw, ChevronLeft, Car, Zap } from 'lucide-react';
import { WhatsAppGateway } from './WhatsAppGateway';

interface UDOSARacerProps {
  onBack: () => void;
}

const ROAD_WIDTH = 300;
const ROAD_HEIGHT = 500;
const CAR_WIDTH = 40;
const CAR_HEIGHT = 70;
const INITIAL_SPEED = 5;
const SPEED_INCREMENT = 1;
const SPEED_INTERVAL = 10000; // 10 seconds

export const UDOSARacer: React.FC<UDOSARacerProps> = ({ onBack }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [highScore, setHighScore] = useState(() => Number(localStorage.getItem('udosa04_racer_highscore') || 0));
  const [hasAnnounced, setHasAnnounced] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const gameState = useRef({
    playerX: ROAD_WIDTH / 2 - CAR_WIDTH / 2,
    playerY: ROAD_HEIGHT - CAR_HEIGHT - 20,
    enemies: [] as { x: number, y: number, speed: number }[],
    collectibles: [] as { x: number, y: number, type: 'cap' | 'logo' }[],
    speed: INITIAL_SPEED,
    distance: 0,
    lastSpeedIncrease: 0,
    frame: 0,
  });

  const resetGame = () => {
    gameState.current = {
      playerX: ROAD_WIDTH / 2 - CAR_WIDTH / 2,
      playerY: ROAD_HEIGHT - CAR_HEIGHT - 20,
      enemies: [],
      collectibles: [],
      speed: INITIAL_SPEED,
      distance: 0,
      lastSpeedIncrease: Date.now(),
      frame: 0,
    };
    setScore(0);
    setLevel(1);
    setIsGameOver(false);
    setIsPaused(false);
  };

  const spawnEnemy = () => {
    const lanes = [20, 110, 200];
    const lane = lanes[Math.floor(Math.random() * lanes.length)];
    gameState.current.enemies.push({
      x: lane + (90 - CAR_WIDTH) / 2,
      y: -CAR_HEIGHT,
      speed: gameState.current.speed * 0.7,
    });
  };

  const spawnCollectible = () => {
    const lanes = [20, 110, 200];
    const lane = lanes[Math.floor(Math.random() * lanes.length)];
    gameState.current.collectibles.push({
      x: lane + (90 - 30) / 2,
      y: -30,
      type: Math.random() > 0.5 ? 'cap' : 'logo',
    });
  };

  const update = () => {
    if (isGameOver || isPaused) return;

    const now = Date.now();
    if (now - gameState.current.lastSpeedIncrease > SPEED_INTERVAL) {
      gameState.current.speed += SPEED_INCREMENT;
      gameState.current.lastSpeedIncrease = now;
      setLevel(prev => prev + 1);
    }

    gameState.current.distance += gameState.current.speed / 10;
    gameState.current.frame++;

    // Spawn logic
    if (gameState.current.frame % 60 === 0) spawnEnemy();
    if (gameState.current.frame % 150 === 0) spawnCollectible();

    // Move enemies
    gameState.current.enemies.forEach((enemy, index) => {
      enemy.y += gameState.current.speed;
      
      // Collision detection
      if (
        gameState.current.playerX < enemy.x + CAR_WIDTH &&
        gameState.current.playerX + CAR_WIDTH > enemy.x &&
        gameState.current.playerY < enemy.y + CAR_HEIGHT &&
        gameState.current.playerY + CAR_HEIGHT > enemy.y
      ) {
        handleGameOver();
      }

      if (enemy.y > ROAD_HEIGHT) {
        gameState.current.enemies.splice(index, 1);
      }
    });

    // Move collectibles
    gameState.current.collectibles.forEach((item, index) => {
      item.y += gameState.current.speed;

      // Collection detection
      if (
        gameState.current.playerX < item.x + 30 &&
        gameState.current.playerX + CAR_WIDTH > item.x &&
        gameState.current.playerY < item.y + 30 &&
        gameState.current.playerY + CAR_HEIGHT > item.y
      ) {
        setScore(prev => prev + 50);
        gameState.current.collectibles.splice(index, 1);
      }

      if (item.y > ROAD_HEIGHT) {
        gameState.current.collectibles.splice(index, 1);
      }
    });
  };

  const handleGameOver = () => {
    setIsGameOver(true);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('udosa04_racer_highscore', String(score));
    }
  };

  const draw = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ROAD_WIDTH, ROAD_HEIGHT);

    // Draw Road
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, ROAD_WIDTH, ROAD_HEIGHT);

    // Draw Shimmer/Road Lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
    ctx.setLineDash([20, 20]);
    ctx.lineDashOffset = -gameState.current.distance % 40;
    ctx.lineWidth = 4;
    
    // Lane markers
    ctx.beginPath();
    ctx.moveTo(100, 0);
    ctx.lineTo(100, ROAD_HEIGHT);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(200, 0);
    ctx.lineTo(200, ROAD_HEIGHT);
    ctx.stroke();

    // Draw Player Car (Purple with Gold stripe)
    const { playerX, playerY } = gameState.current;
    ctx.fillStyle = '#7000FF'; // Imperial Purple
    ctx.fillRect(playerX, playerY, CAR_WIDTH, CAR_HEIGHT);
    ctx.fillStyle = '#D4AF37'; // Gold stripe
    ctx.fillRect(playerX + CAR_WIDTH / 2 - 2, playerY, 4, CAR_HEIGHT);
    
    // Car details
    ctx.fillStyle = '#000'; // Windows
    ctx.fillRect(playerX + 5, playerY + 15, CAR_WIDTH - 10, 15);
    ctx.fillRect(playerX + 5, playerY + 45, CAR_WIDTH - 10, 10);

    // Draw Enemies (Grey)
    gameState.current.enemies.forEach(enemy => {
      ctx.fillStyle = '#4a4a4a';
      ctx.fillRect(enemy.x, enemy.y, CAR_WIDTH, CAR_HEIGHT);
      ctx.fillStyle = '#333';
      ctx.fillRect(enemy.x + 5, enemy.y + 15, CAR_WIDTH - 10, 15);
    });

    // Draw Collectibles
    gameState.current.collectibles.forEach(item => {
      if (item.type === 'cap') {
        ctx.fillStyle = '#D4AF37';
        ctx.beginPath();
        ctx.arc(item.x + 15, item.y + 15, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#000';
        ctx.fillRect(item.x + 5, item.y + 12, 20, 6);
      } else {
        ctx.fillStyle = '#DB2777'; // Pink
        ctx.beginPath();
        ctx.arc(item.x + 15, item.y + 15, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 10px serif';
        ctx.fillText('04', item.x + 8, item.y + 18);
      }
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      update();
      draw(ctx);
      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [isGameOver, isPaused, score]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isGameOver || isPaused) return;
      if (e.key === 'ArrowLeft') {
        gameState.current.playerX = Math.max(10, gameState.current.playerX - 20);
      }
      if (e.key === 'ArrowRight') {
        gameState.current.playerX = Math.min(ROAD_WIDTH - CAR_WIDTH - 10, gameState.current.playerX + 20);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isGameOver, isPaused]);

  const handleTouch = (e: React.MouseEvent | React.TouchEvent) => {
    if (isGameOver || isPaused) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    
    let clientX;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }

    const x = clientX - rect.left;
    if (x < rect.width / 2) {
      gameState.current.playerX = Math.max(10, gameState.current.playerX - 30);
    } else {
      gameState.current.playerX = Math.min(ROAD_WIDTH - CAR_WIDTH - 10, gameState.current.playerX + 30);
    }
  };

  const shareOnWhatsApp = () => {
    const text = `I just conquered the hurdles on the UDOSA 04 Highway! I reached ${Math.floor(gameState.current.distance)} KM. Can you drive better? 🏎️💨 #UDOSA04 #GreatReconnection`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center">
      {!hasAnnounced && (
        <div className="fixed inset-0 z-[100] bg-purple/95 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="bg-white rounded-[2.5rem] p-8 max-w-sm w-full text-center shadow-2xl border-4 border-gold">
            <h2 className="text-3xl font-serif font-black text-purple uppercase tracking-tighter mb-2">UDOSA Highway</h2>
            <p className="text-pink font-serif italic mb-8">Avoid the hurdles, collect the caps, and reconnect the legacy!</p>
            <WhatsAppGateway 
              gameName="UDOSA Highway" 
              type="pre" 
              onComplete={() => setHasAnnounced(true)} 
            />
          </div>
        </div>
      )}
      <div className="w-full flex justify-between items-center mb-6">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-purple font-bold hover:text-pink transition-colors"
        >
          <ChevronLeft className="w-5 h-5" /> Back to Hub
        </button>
        <div className="flex gap-4">
          <div className="bg-purple/10 px-4 py-2 rounded-xl border border-purple/20">
            <p className="text-[10px] font-bold text-purple uppercase tracking-widest">Score</p>
            <p className="text-xl font-serif font-black text-pink">{score}</p>
          </div>
          <div className="bg-gold/10 px-4 py-2 rounded-xl border border-gold/20">
            <p className="text-[10px] font-bold text-gold uppercase tracking-widest">Level</p>
            <p className="text-xl font-serif font-black text-purple">{level}</p>
          </div>
        </div>
      </div>

      <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-purple/20 bg-stone-900">
        <canvas 
          ref={canvasRef}
          width={ROAD_WIDTH}
          height={ROAD_HEIGHT}
          onMouseDown={handleTouch}
          onTouchStart={handleTouch}
          className="cursor-pointer touch-none"
        />

        {isPaused && !isGameOver && (
          <div className="absolute inset-0 bg-purple/40 backdrop-blur-md flex flex-col items-center justify-center p-8 text-center">
            <Car className="w-20 h-20 text-gold mb-6 animate-bounce" />
            <h2 className="text-3xl font-serif font-black text-white mb-4 uppercase tracking-tighter">UDOSA Highway</h2>
            <p className="text-white/90 font-serif italic mb-8">Avoid the hurdles, collect the caps, and reconnect the legacy!</p>
            <button 
              onClick={() => setIsPaused(false)}
              className="bg-gold text-purple px-10 py-4 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:bg-white transition-all"
            >
              Start Journey
            </button>
          </div>
        )}

        <AnimatePresence>
          {isGameOver && !hasSubmitted && (
            <WhatsAppGateway 
              gameName="UDOSA Highway" 
              score={`${Math.floor(gameState.current.distance)} KM`} 
              type="post" 
              onComplete={() => setHasSubmitted(true)} 
            />
          )}
          {isGameOver && hasSubmitted && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 bg-purple/90 backdrop-blur-lg flex items-center justify-center p-6"
            >
              <div className="bg-white rounded-[2.5rem] p-8 w-full max-w-xs text-center space-y-6 shadow-2xl border-4 border-gold">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto">
                  <Trophy className="w-10 h-10 text-gold" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif font-black text-purple uppercase">Journey Complete!</h3>
                  <p className="text-slate-500 font-serif italic">You traveled {Math.floor(gameState.current.distance)} KM.</p>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-purple/5 p-3 rounded-2xl">
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Final Score</p>
                    <p className="text-xl font-serif font-bold text-purple">{score}</p>
                  </div>
                  <div className="bg-gold/5 p-3 rounded-2xl">
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Best KM</p>
                    <p className="text-xl font-serif font-bold text-gold">{Math.floor(highScore / 10)}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button 
                    onClick={() => {
                      setHasSubmitted(false);
                      resetGame();
                    }}
                    className="w-full bg-purple text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-pink transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" /> Try Again
                  </button>
                  <button 
                    onClick={onBack}
                    className="w-full border-2 border-purple text-purple py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-purple hover:text-white transition-all"
                  >
                    Back to Hub
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center space-y-4">
        <div className="flex items-center justify-center gap-8 text-slate-400">
          <div className="flex flex-col items-center gap-2">
            <div className="flex gap-1">
              <div className="w-8 h-8 rounded bg-stone-200 flex items-center justify-center text-xs font-bold">←</div>
              <div className="w-8 h-8 rounded bg-stone-200 flex items-center justify-center text-xs font-bold">→</div>
            </div>
            <p className="text-[10px] uppercase tracking-widest font-bold">Desktop Controls</p>
          </div>
          <div className="w-px h-12 bg-stone-200" />
          <div className="flex flex-col items-center gap-2">
            <div className="w-16 h-8 rounded border-2 border-dashed border-stone-300 flex items-center justify-center text-[10px] font-bold">TAP L/R</div>
            <p className="text-[10px] uppercase tracking-widest font-bold">Mobile Controls</p>
          </div>
        </div>
      </div>
    </div>
  );
};

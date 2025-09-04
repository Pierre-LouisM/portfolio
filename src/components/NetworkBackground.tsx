'use client';

import { useState, useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  id: number;
}

interface NetworkBackgroundProps {
  className?: string;
}

export default function NetworkBackground({ className = "" }: NetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const [nodes, setNodes] = useState<Node[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    // Create nodes
    const nodeCount = Math.floor((dimensions.width * dimensions.height) / 50000);
    const newNodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        id: i
      });
    }
    
    setNodes(newNodes);
  }, [dimensions]);

  useEffect(() => {
    if (!canvasRef.current || nodes.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        
        // Bounce off edges
        if (node.x < 0 || node.x > dimensions.width) node.vx *= -1;
        if (node.y < 0 || node.y > dimensions.height) node.vy *= -1;
        
        // Keep within bounds
        node.x = Math.max(0, Math.min(dimensions.width, node.x));
        node.y = Math.max(0, Math.min(dimensions.height, node.y));
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(99, 102, 241, 0.1)';
      ctx.lineWidth = 1;
      
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.2;
            ctx.strokeStyle = `rgba(99, 102, 241, ${opacity})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      ctx.fillStyle = 'rgba(99, 102, 241, 0.3)';
      nodes.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [nodes, dimensions]);

  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30" />
      
      {/* Network canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: 'multiply' }}
      />
    </div>
  );
}
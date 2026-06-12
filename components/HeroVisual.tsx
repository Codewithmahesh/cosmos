'use client'

import { motion } from 'framer-motion'

const NODES = [
  { id: 'cosmos',  x: 200, y: 200, r: 18, label: 'COSMOS',     main: true },
  { id: 'n1',      x: 46,  y: 168, r: 9,  label: 'Translator'              },
  { id: 'n2',      x: 108, y: 55,  r: 9,  label: 'Research'                },
  { id: 'n3',      x: 212, y: 36,  r: 9,  label: 'Code'                    },
  { id: 'n4',      x: 330, y: 74,  r: 9,  label: 'Analyst'                 },
  { id: 'n5',      x: 364, y: 194, r: 9,  label: 'Payment'                 },
  { id: 'n6',      x: 308, y: 324, r: 9,  label: 'Vision'                  },
  { id: 'n7',      x: 155, y: 350, r: 9,  label: 'Writing'                 },
  { id: 'n8',      x: 48,  y: 308, r: 9,  label: 'Search'                  },
]

const EDGES = [
  { from: 'n1', delay: 0    },
  { from: 'n2', delay: 0.7  },
  { from: 'n3', delay: 1.4  },
  { from: 'n4', delay: 0.35 },
  { from: 'n5', delay: 1.05 },
  { from: 'n6', delay: 1.75 },
  { from: 'n7', delay: 0.55 },
  { from: 'n8', delay: 1.25 },
]

function getNode(id: string) {
  return NODES.find(n => n.id === id)!
}

export default function HeroVisual() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Left fade — blends into headline on desktop */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10"
        style={{ background: 'linear-gradient(to right, white, transparent)' }}
      />

      <svg
        viewBox="0 0 400 400"
        className="h-full w-full"
        style={{ overflow: 'visible', maxHeight: '420px' }}
      >
        {/* Edges */}
        {EDGES.map(edge => {
          const s = getNode(edge.from)
          const d = getNode('cosmos')
          return (
            <line
              key={`line-${edge.from}`}
              x1={s.x} y1={s.y}
              x2={d.x} y2={d.y}
              stroke="rgba(0,0,0,0.07)"
              strokeWidth={1}
            />
          )
        })}

        {/* Animated flow dots */}
        {EDGES.map(edge => {
          const s = getNode(edge.from)
          const d = getNode('cosmos')
          return (
            <motion.circle
              key={`dot-${edge.from}`}
              cx={0}
              cy={0}
              r={2.5}
              fill="#2563EB"
              initial={{ x: s.x, y: s.y, opacity: 0 }}
              animate={{
                x: [s.x, d.x],
                y: [s.y, d.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                delay: edge.delay,
                ease: 'linear',
                repeatDelay: 2,
              }}
            />
          )
        })}

        {/* Cosmos pulse ring */}
        <motion.circle
          cx={200}
          cy={200}
          r={18}
          fill="none"
          stroke="#2563EB"
          strokeWidth={1.5}
          style={{ transformOrigin: '200px 200px' }}
          animate={{ scale: [1, 2.4], opacity: [0.5, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut', repeatDelay: 0.5 }}
        />

        {/* Agent nodes */}
        {NODES.filter(n => !n.main).map(node => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill="white"
              stroke="rgba(0,0,0,0.12)"
              strokeWidth={1}
            />
            <text
              x={node.x}
              y={node.y + node.r + 9}
              textAnchor="middle"
              fill="#bbb"
              style={{
                fontSize: '8px',
                fontFamily: "var(--font-body), 'Inter', sans-serif",
                fontWeight: 500,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* COSMOS centre node */}
        <circle cx={200} cy={200} r={18} fill="#2563EB" />
        <text
          x={200}
          y={200}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="white"
          style={{
            fontSize: '7px',
            fontFamily: "var(--font-heading), 'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.08em',
          }}
        >
          COSMOS
        </text>
      </svg>
    </div>
  )
}

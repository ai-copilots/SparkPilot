/**
 * Logo Component
 * 
 * 特性:
 * - 支持自定义尺寸
 * - 保持宽高比
 * - 支持明暗主题自适应
 * - 可访问性支持
 */
import { cn } from "@/lib/utils";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export function Logo({ className, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 394 80"
      className={cn("h-10 w-auto", className)}
      {...props}
      aria-label="Copilots Logo"
    >
      {/* Icon Group */}
      <g transform="translate(8, 8)">
        {/* Neural connections background */}
        <path
          d="M32 12 Q42 32, 32 52 Q22 32, 32 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-zinc-400 dark:text-zinc-600 opacity-50"
        />
        <path
          d="M12 32 Q32 42, 52 32 Q32 22, 12 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-zinc-400 dark:text-zinc-600 opacity-50"
        />

        {/* Synaptic nodes with theme-aware gradients */}
        <defs>
          <radialGradient id="nodeGradientLight" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(24 24 27)" />
            <stop offset="100%" stopColor="rgb(39 39 42)" />
          </radialGradient>
          <radialGradient id="nodeGradientDark" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgb(250 250 250)" />
            <stop offset="100%" stopColor="rgb(228 228 231)" />
          </radialGradient>
        </defs>

        {/* Main nodes with theme-aware fill */}
        <circle cx="32" cy="32" r="3" className="fill-zinc-900 dark:fill-zinc-100" />
        <circle cx="32" cy="12" r="3" className="fill-zinc-900 dark:fill-zinc-100" />
        <circle cx="32" cy="52" r="3" className="fill-zinc-900 dark:fill-zinc-100" />
        <circle cx="12" cy="32" r="3" className="fill-zinc-900 dark:fill-zinc-100" />
        <circle cx="52" cy="32" r="3" className="fill-zinc-900 dark:fill-zinc-100" />

        {/* Dynamic connection paths */}
        <path
          d="M32 12 L52 32 L32 52 L12 32 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          className="text-zinc-600 dark:text-zinc-400"
        />

        {/* Neuron activation rings */}
        <circle
          cx="32"
          cy="32"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="1,3"
          className="text-zinc-700 dark:text-zinc-400"
        />
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeDasharray="1,3"
          className="text-zinc-700 dark:text-zinc-400"
        />

        {/* Pulse effect */}
        <circle
          cx="32"
          cy="32"
          r="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          className="text-zinc-600 dark:text-zinc-400 opacity-30"
        >
          <animate
            attributeName="r"
            values="12;16;12"
            dur="3s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.3;0.1;0.3"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      </g>

      {/* Text part with theme-aware fill */}
      <text
        x="90"
        y="48"
        className="fill-zinc-900 dark:fill-zinc-100 select-none"
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '36px',
          fontWeight: '600',
          letterSpacing: '-0.025em',
        }}
      >
        copilots
      </text>
    </svg>
  );
} 
import { cn } from '@/lib/utils';

interface LiquidBackgroundProps {
  className?: string;
  variant?: 'primary' | 'muted' | 'accent';
}

export const LiquidBackground = ({ className, variant = 'primary' }: LiquidBackgroundProps) => {
  return (
    <div className={cn('absolute inset-0 overflow-hidden -z-10', className)}>
      {/* Primary Blob */}
      <div 
        className={cn(
          'absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-20',
          variant === 'primary' && 'bg-primary',
          variant === 'muted' && 'bg-muted-foreground',
          variant === 'accent' && 'bg-accent'
        )}
        style={{
          top: '10%',
          left: '20%',
          animation: 'blob 7s ease-in-out infinite',
        }}
      />
      
      {/* Secondary Blob */}
      <div 
        className={cn(
          'absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-15',
          variant === 'primary' && 'bg-accent',
          variant === 'muted' && 'bg-primary',
          variant === 'accent' && 'bg-secondary'
        )}
        style={{
          bottom: '20%',
          right: '15%',
          animation: 'blob 7s ease-in-out infinite',
          animationDelay: '2s',
        }}
      />
      
      {/* Tertiary Blob */}
      <div 
        className={cn(
          'absolute w-[300px] h-[300px] rounded-full blur-3xl opacity-10',
          variant === 'primary' && 'bg-secondary',
          variant === 'muted' && 'bg-accent',
          variant === 'accent' && 'bg-primary'
        )}
        style={{
          top: '50%',
          right: '40%',
          animation: 'blob 7s ease-in-out infinite',
          animationDelay: '4s',
        }}
      />
    </div>
  );
};

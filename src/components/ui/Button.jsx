import React from 'react';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'default', 
  asChild = false,
  children, 
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-700 text-white shadow-lg hover:shadow-xl focus:ring-primary',
    secondary: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
    accent: 'bg-accent hover:bg-accent-600 text-white shadow-lg hover:shadow-xl focus:ring-accent',
    outline: 'border border-secondary-200 text-text-primary hover:bg-secondary-50 focus:ring-secondary',
    ghost: 'text-text-primary hover:bg-secondary-100 focus:ring-secondary',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-md',
    default: 'px-6 py-3 rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl',
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    className
  );

  if (asChild) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className),
      ref,
      ...props,
    });
  }

  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

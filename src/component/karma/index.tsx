import { useState, useEffect } from 'react';

interface CurrentDateProps {
  prev: Date;
  current: Date;
}

interface Props {
  children: React.ReactNode;
  hours?: number;
  color?: string;
  decreaseBy?: number;
}

/**
 * @param {string} color - sets the backgroundColor of mask that is created by this components
 * @param {number} hours - revalidates every specified hour if the day has changed or not, resulting in decreasing the opacity
 * @param {float} decreaseBy - decrease the opacity by
 */

export const Karma: React.FC<Props> = ({
  children,
  color = 'white',
  hours = 6,
  decreaseBy = 0.1,
}) => {
  const [decreaseOpacity, setDecreaseOpacity] = useState<number>(1);
  const [currentDate, setCurrentDate] = useState<CurrentDateProps>({
    prev: new Date(),
    current: new Date(),
  });

  useEffect(() => {
    if (decreaseOpacity <= 0) return;

    const interval = setInterval(() => {
      const newDate = new Date();
      if (newDate.getDate() !== currentDate.current.getDate()) {
        setCurrentDate({
          prev: currentDate.current,
          current: newDate,
        });
        setDecreaseOpacity((prev: number) => prev - decreaseBy);
      }
    }, hours * 3600 * 1000);

    return () => clearInterval(interval);
  }, [currentDate, decreaseOpacity]);

  return (
    <div
      style={{
        opacity: decreaseOpacity,
        backgroundColor: color,
        position: 'absolute',
        pointerEvents: 'none',
        inset: 0,
        zIndex: 999999999,
      }}
    >
      {children}
    </div>
  );
};

import { useState, useEffect } from 'react';

interface CurrentDateProps {
  prev: Date;
  current: Date;
}

interface Props {
  children: React.ReactNode;
  hours?: number;
  color?: string;
}

export const Karma: React.FC<Props> = ({
  children,
  hours = 6,
  color = 'white',
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
        setDecreaseOpacity((prev: number) => prev - 0.1);
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

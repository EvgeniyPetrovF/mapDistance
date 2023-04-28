import {useEffect, useRef} from 'react';

const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  cooldownTime: number,
): ((...funcArgs: Parameters<T>) => void) => {
  const refreshCooldown = useRef<ReturnType<typeof setTimeout> | null>();

  const cleanUp = () => {
    if (refreshCooldown.current) {
      clearTimeout(refreshCooldown.current);
      refreshCooldown.current = null;
    }
  };

  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, []);

  return (...args) => {
    if (refreshCooldown.current) {
      cleanUp();
    }

    refreshCooldown.current = setTimeout(() => {
      refreshCooldown.current = null;
      callback(...args);
    }, cooldownTime);
  };
};
export default useDebounce;

// context/NavbarHeightContext.tsx
import { createContext, useContext, useState, useEffect } from 'react';

type NavbarHeightContextType = {
  height: number;
}

const NavbarHeightContext = createContext<NavbarHeightContextType | undefined>(undefined);

export const useNavbarHeight = () => {
  const context = useContext(NavbarHeightContext);
  if (!context) {
    throw new Error('useNavbarHeight must be used within a NavbarHeightProvider');
  }
  return context;
};

type providerType = {
  children: React.ReactNode
}

export function NavbarHeightProvider({ children }: providerType) {
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    const navbarElement = document.getElementById('navbar'); // assuming the navbar has an id of 'navbar'

    if (navbarElement) {
      const updateHeight = () => {
        setHeight(navbarElement.offsetHeight);
      };

      // Observe the size changes of the navbar using ResizeObserver
      const resizeObserver = new ResizeObserver(updateHeight);
      resizeObserver.observe(navbarElement);

      // Initial height
      updateHeight();

      // Clean up the observer when the component unmounts
      return () => resizeObserver.disconnect();
    }
  }, [height]);

  return (
    <NavbarHeightContext.Provider value={{ height }}>
      {children}
    </NavbarHeightContext.Provider>
  )
}
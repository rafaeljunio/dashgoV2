import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import { createContext, ReactNode, useContext, useEffect } from "react";
import { RiRotateLockLine } from "react-icons/ri";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {

  const disclosure = useDisclosure();
  const router = useRouter();

  // router.asPath -> caminho da Rota
  // chama a função abaixo toda vez que o caminho da rota mudar
  // fecha a sidebar
  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)

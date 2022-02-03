import { FC, ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return <>{children}</>;
};

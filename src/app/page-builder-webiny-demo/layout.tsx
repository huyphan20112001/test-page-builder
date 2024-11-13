'use client'
import MainLayout from "@/components/main-layout/MainLayout";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <MainLayout>{children}</MainLayout>;
};

export default Layout;

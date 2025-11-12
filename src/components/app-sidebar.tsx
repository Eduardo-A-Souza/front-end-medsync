import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Visão geral",
    url: "/",
    icon: Home,
  },
  {
    title: "Cadastrar Produto",
    url: "/cadastrar",
    icon: Inbox,
  },
  {
    title: "Excluir produto",
    url: "/excluir",
    icon: Calendar,
  },
  {
    title: "Editar Produto",
    url: "/editar",
    icon: Search,
  },
  {
    title: "Adicionar entrada",
    url: "/entrada",
    icon: Settings,
  },
  {
    title: "Adicionar saida",
    url: "/saida",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="px-4 py-2">
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-3 my-8">
            <div className="h-10 w-10 rounded-md bg-sidebar-primary text-sidebar-primary-foreground flex items-center justify-center font-bold">
              SL
            </div>
            <div>
              <h1 className="text-lg font-semibold text-sidebar-foreground">
                MedSync
              </h1>
              <p className="text-sm text-sidebar-accent-foreground">
                Sistemas Logísticos
              </p>
            </div>
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-5">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a
                      href={item.url}
                      className="block rounded-md px-3 py-2 hover:bg-sidebar-accent transition"
                    >
                      <span className="text-lg text-sidebar-foreground">
                        {item.title}
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

import { redirect } from "next/navigation"

import { auth } from "@/lib/auth/config"


export default async function ProtectedLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const session = await auth()
    if (!session) {
        redirect("/auth/login")
    }
    return <>{children}</>
  }
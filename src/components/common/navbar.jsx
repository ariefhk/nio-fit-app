import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import useUrl from "@/hooks/useUrl"
import { cn } from "@/lib/tailwind-utils"
import { CircleUser, Menu, Package2, Search } from "lucide-react"
import { FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"
import SectionWrapper from "./section-wrapper"

const navLinks = [
  {
    id: 1,
    name: "Beranda",
    href: "/",
  },
  {
    id: 2,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    id: 3,
    name: "Konsultasi",
    href: "/konsultasi",
  },
  {
    id: 4,
    name: "Teman Sehat",
    href: "/teman-sehat",
  },
  {
    id: 5,
    name: "Artikel",
    href: "/artikel",
  },
]

export default function Navbar() {
  const { pathname } = useUrl()

  console.log("pathname: ", pathname)

  return (
    <div className="w-full fixed z-20 top-0 h-16 border-b ">
      <SectionWrapper className=" flex   items-center justify-between md:justify-normal  h-full  gap-4  bg-background ">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-x-[50px]">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base">
            <img
              src="/images/Logo.svg"
              alt=""
              className="w-[100px] h-[30px] object-cover"
            />
            <span className="sr-only">Neo Fit</span>
          </Link>
          <div className="flex items-center gap-x-[50px]">
            {navLinks.map((navlink) => {
              return (
                <Link
                  key={navlink.id}
                  to={navlink.href}
                  className={cn(
                    "text-muted-foreground text-text16_24 px-[16px] py-[4px] transition-colors hover:text-foreground",
                    {
                      "bg-color-1 text-white rounded-full":
                        pathname === navlink.href,
                    },
                  )}>
                  {navlink.name}
                </Link>
              )
            })}
          </div>
        </nav>
        <div className="flex   w-max items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="flex items-center gap-x-5">
                <span className="text-text16_24 font-medium hidden lg:inline">
                  Yoga Agatha!
                </span>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full">
                  <FaUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold">
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground">
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground">
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </SectionWrapper>
    </div>
  )
}

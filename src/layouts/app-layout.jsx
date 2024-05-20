import { cn } from "@/lib/tailwind-utils"
import PropTypes from "prop-types"

export default function AppLayout({ children, className }) {
  return <main className={cn(className)}>{children}</main>
}

AppLayout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}

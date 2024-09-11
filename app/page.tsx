import { SabTechTool } from "@/components/sab-tech-tool"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"; // Add this import

export default function Home() {
  return (
    <>
      <SabTechTool />
      </>
  )
}


function Button({ className, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants(), className)} {...props} />;
}
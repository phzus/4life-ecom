import Image from "next/image"

type LogoVariant = "marrom" | "bege"
type LogoType = "completa" | "simbolo"

type LogoProps = {
  variant?: LogoVariant
  type?: LogoType
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

const Logo = ({
  variant = "marrom",
  type = "completa",
  className = "",
  width,
  height,
  priority = false,
}: LogoProps) => {
  const file =
    type === "completa"
      ? `/brand/completa-${variant}.svg`
      : `/brand/simbolo-box-${variant}.svg`

  const dimensions =
    type === "completa"
      ? { w: width ?? 114, h: height ?? 48 }
      : { w: width ?? 40, h: height ?? 40 }

  return (
    <Image
      src={file}
      alt="4Life Nutrition"
      width={dimensions.w}
      height={dimensions.h}
      className={className}
      priority={priority}
    />
  )
}

export default Logo

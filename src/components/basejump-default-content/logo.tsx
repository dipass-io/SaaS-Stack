/* istanbul ignore file */
import Image from "next/image";
import cx from "classnames";

type Props = {
  size: "sm" | "lg";
  className?: string;
};

const Logo = ({ size = "lg", className }: Props) => {
  const height = size === "sm" ? 40 : 150;
  const width = size === "sm" ? 40 : 150;
  return (
    <div
      className={cx(
        "flex items-center justify-center",
        {
          "gap-x-3 md:gap-x-4": size === "lg",
          "gap-x-1 md:gap-x-2": size === "sm",
        },
        className
      )}
    >
      <div
        className={cx({
          "w-24 md:w-auto": size === "lg",
          "w-14 md:w-auto": size === "sm",
        })}
      >
        <Image
          src={"/images/rhinologo-BLACK.svg"}
          height={height}
          width={width}
          alt={"Logo Dipassio"}
        />
      </div>
      <h1
        className={cx("font-black", {
          "text-3xl md:text-8xl": size === "lg",
          "text-2xl": size === "sm",
        })}
      >
        DIPASSIO
      </h1>
    </div>
  );
};

export default Logo;

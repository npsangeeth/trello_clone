import { Button, type ButtonProps } from "@mui/material";

interface RoundButtonProps extends ButtonProps {
  btnSize?: number;
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
}

function RoundButton({
  children,
  btnSize = 50,
  bgColor = "#1048f2",
  hoverColor = "#4a4e50",
  textColor = "#fff",
  sx,
  ...rest
}: RoundButtonProps) {
  return (
    <Button
      {...rest}
      sx={{
        color: textColor,
        backgroundColor: bgColor,
        width: btnSize,
        height: btnSize,
        minWidth: btnSize,
        borderRadius: "50%",
        padding: 0,
        textTransform: "none",
        ":hover": {
          backgroundColor: hoverColor,
        },
        ...sx,
      }}
    >
      {children}
    </Button>
  );
}

export default RoundButton;

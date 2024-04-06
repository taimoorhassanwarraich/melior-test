interface MtextProps {
    fontSize?: "16px" | "14px" | "12px" | "20px"|"10px"|"24px"|'36px';
    fontWeight?: 400 | 600 | 500 | 700 | 900;
    fontColor?: string;
    children: React.ReactNode;
    lineHeight?: number | string;
  }
  
  export const Mtext: React.FC<MtextProps> = ({
    fontSize = "14px",
    fontWeight = 400,
    lineHeight,
    fontColor = "black",
    children,
  }) => {
    const textStyle: React.CSSProperties = {
      fontSize,
      fontWeight,
      lineHeight,
      color: fontColor,
    };
  
    return (
      <p  style={textStyle}>
        {children}
      </p>
    );
  };

  
  
  
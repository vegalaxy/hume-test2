import React from "react";
import styled from "styled-components";

// Define the types of props you want to allow for customization
interface LogoProps {
  color?: string;
  width?: string | number;
  height?: string | number;
  strokeWidth?: number;
  onClick?: () => void; // Optional click handler for interactivity
}

const Svg = styled.svg<LogoProps>`
  fill: ${({ color }) => color || "#FFFFFF"}; // Default color set to white
  width: ${({ width }) => width || "100px"};  // Default width
  height: ${({ height }) => height || "auto"}; // Default height
  stroke-width: ${({ strokeWidth }) => strokeWidth || 1}; // Default stroke width
`;

const ArdoiseLogo: React.FC<LogoProps> = ({ color, width, height, strokeWidth, onClick }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 1006 512"
    xmlns="http://www.w3.org/2000/svg"
    strokeWidth={strokeWidth}
    color={color}
    onClick={onClick} // Optional interactivity
  >
    <path
      d="M57.5,273.5c24.8,0,50.5-16.7,73.6-40.9c24-25,47-56.5,47-90c0-32.4-23.2-65-54.6-65c-24.8,0-50.5,16.7-73.6,40.9C26.2,145.6,2.5,177,2.5,210.5c0,32.4,23.2,65,54.6,65"
      fill={color || "#FFFFFF"} // Fill with default color or user input
    />
    {/* Add more paths or shapes to recreate the full logo */}
    <text x="150" y="50" fontFamily="Verdana" fontSize="35" fill="white">
      Ardoise
    </text>
  </Svg>
);

export default ArdoiseLogo;

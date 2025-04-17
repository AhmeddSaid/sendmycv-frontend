/**
 * FlexboxSpacer can be used to create empty space in flex.
 * It is a div that grows to fill the available space specified by maxWidth.
 * You can also set a minimum width with minWidth.
 */
import styled from "styled-components";

interface FlexboxSpacerProps {
    maxWidth: number;
    minWidth?: number;
    className?: string;
}

const Spacer = styled.div<FlexboxSpacerProps>`
  visibility: hidden;
  flex-grow: 1;
  flex-shrink: 10000;
  max-width: ${(props) => props.maxWidth}px;
  min-width: ${(props) => props.minWidth || 0}px;
`;

export const FlexboxSpacer = ({maxWidth, minWidth = 0, className = ""}: FlexboxSpacerProps) => {
    return <Spacer maxWidth={maxWidth} minWidth={minWidth} className={className}/>;
};

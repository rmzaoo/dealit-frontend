import React, { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import _ from "lodash";
import {
  DropdownAndTextContainer,
  TextContainer,
  Text,
  DropdownContainer,
  StyledDropdown,
  DropdownText,
  DrodownArrowContainer,
  DropdownContentContainer,
  DropdownContentOption,
} from "./style";

const QuantityDropdown = ({ optionSelected, setOptionSelected }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const dropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  //DETECT MOUSE CLICKS OUTSIDE
  const useOutsideAlerter = (ref: any) => {
    useEffect(() => {
      //CLICKED OUTSIDE OF ELEMENT
      const handler = (event: { target: any }) => {
        if (isOpen && ref.current && !ref.current.contains(event.target)) {
          setIsOpen(false);
        }
      };

      //BINDE EVENT LISTENER
      document.addEventListener("mousedown", handler);
      return () => {
        // UNBIND EVENT LISTENER ON CLEANUP
        document.removeEventListener("mousedown", handler);
      };
    }, [ref, isOpen]);
  };

  const getDropdownOptions = (index: number) => {
    return (
      <DropdownContentOption
        onClick={() => {
          setOptionSelected(index + 1);
          dropdownToggle();  
        }}
        active ={index + 1 === optionSelected}
      >
        {index + 1}
      </DropdownContentOption>
    );
  };

  useOutsideAlerter(wrapperRef);

  return (
    <DropdownAndTextContainer>
      <TextContainer>
        <Text>Quantity:</Text>
      </TextContainer>
      <DropdownContainer ref={wrapperRef}>
        <StyledDropdown onClick={() => dropdownToggle()}>
          <DropdownText>{optionSelected}</DropdownText>
          <DrodownArrowContainer>
            {isOpen ? (
              <MdKeyboardArrowUp style={{ verticalAlign: "middle" }} />
            ) : (
              <MdKeyboardArrowDown style={{ verticalAlign: "middle" }} />
            )}
          </DrodownArrowContainer>
        </StyledDropdown>
        {isOpen && (
          <DropdownContentContainer>
            {_.times(15, getDropdownOptions)}
          </DropdownContentContainer>
        )}
      </DropdownContainer>
    </DropdownAndTextContainer>
  );
};

export default QuantityDropdown;

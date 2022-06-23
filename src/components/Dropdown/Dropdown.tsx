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

interface Props {
  optionSelected: string;
  setOptionSelected: React.Dispatch<React.SetStateAction<string>>;
  options: string[];
}

const Dropdown = ({ optionSelected, setOptionSelected, options }: Props) => {
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

      //BIND EVENT LISTENER
      document.addEventListener("mousedown", handler);
      return () => {
        // UNBIND EVENT LISTENER ON CLEANUP
        document.removeEventListener("mousedown", handler);
      };
    }, [ref, isOpen]);
  };

  useOutsideAlerter(wrapperRef);

  return (
    <DropdownAndTextContainer>
      <DropdownContainer ref={wrapperRef}>
        <StyledDropdown onClick={() => dropdownToggle()} active={isOpen}>
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
            {options.map((value, key) => {
              return (
                <DropdownContentOption
                  onClick={() => {
                    setOptionSelected(value);
                    dropdownToggle();
                  }}
                  active={value === optionSelected}
                  key={key.toString()}
                >
                  {value}
                </DropdownContentOption>
              );
            })}
          </DropdownContentContainer>
        )}
      </DropdownContainer>
    </DropdownAndTextContainer>
  );
};

export default Dropdown;

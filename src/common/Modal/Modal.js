import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useOnClickOutside } from '@hooks/useOnClickOutside';
import {
  Text,
  ModalContainer,
  ModalStyledContent,
  CloseButton,
  Overlay,
  Block,
} from './Modal.styled';
import { prop } from 'ramda';

const Modal = ({ children, config = {}, title, callback = () => {} }) => {
  const position = prop('position')(config) || 'fixed';
  const maxHeight = prop('maxHeight')(config) || '1000';
  const refClickOutside = useRef();

  useOnClickOutside(refClickOutside, () => {
    callback('CLOSED');
  });

  const escFunction = useCallback(event => {
    if (event.keyCode === 27) {
      callback('CLOSED');
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false);
    return () => {
      document.removeEventListener('keydown', escFunction, false);
    };
    // eslint-disable-next-line
  }, []);

  const renderWrapper = (
    <>
      <ModalContainer position={position} ref={refClickOutside} level={9}>
        <ModalStyledContent maxHeight={maxHeight}>
          <Block padding="24px" direction="row" justifyContent="space-between">
            <Text
              variant="p"
              color="white"
              size={20}
              lineHeight={24}
              fontWeight={600}
              style={{ textAlign: 'left' }}
            >
              {title}
            </Text>
            <CloseButton id="close-button" onClick={() => callback('CLOSED')}>
              X
            </CloseButton>
          </Block>
          {children}
        </ModalStyledContent>
      </ModalContainer>
      <Overlay level={1} isActive />
    </>
  );

  return renderWrapper;
};

export { Modal };

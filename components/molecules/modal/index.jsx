import React from 'react'
import {Modal} from 'react-native';

export default function CustomModal({children,visible,onRequestClose,animationType}) {
  return (
  <Modal 
    animationType={animationType}//"slide" 
    transparent={true} 
    visible={visible}
    onRequestClose={()=>onRequestClose()}>
        {children}
  </Modal>
  )
}
